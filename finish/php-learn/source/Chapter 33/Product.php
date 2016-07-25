<?php
// This class holds data about a single amazon product

// Most of the work is done by the libraries (simpleXML and nuSOAP)
// and dealt with in the constructor for this class.

// This class' main purpose is to provide a common interface to the data from
// these two sources so all the display code can be common

class Product {
  private $ASIN;
  private $productName;
  private $releaseDate;
  private $manufacturer;
  private $imageUrlMedium;
  private $imageUrlLarge;
  private $listPrice;
  private $ourPrice;
  private $salesRank;
  private $availability;
  private $avgCustomerRating;
  private $authors = array();
  private $reviews = array();
  private $similarProducts = array();
  private $soap; // array returned by SOAP calls

  function __construct($xml) {
    if(METHOD=='SOAP')  {

      $this->ASIN = $xml['ASIN'];
      $this->productName = $xml['ItemAttributes']['Title'];

      if (is_array($xml['ItemAttributes']['Author']) != "") {
          foreach($xml['ItemAttributes']['Author'] as $author) {
            $this->authors[] = $author;
          }
      } else {
          $this->authors[] = $xml['ItemAttributes']['Author'];
      }

      $this->releaseDate = $xml['ItemAttributes']['PublicationDate'];
      $this->manufacturer = $xml['ItemAttributes']['Manufacturer'];
      $this->imageUrlMedium = $xml['MediumImage']['URL'];
      $this->imageUrlLarge = $xml['LargeImage']['URL'];

      $this->listPrice = $xml['ItemAttributes']['ListPrice']['FormattedPrice'];
      $this->listPrice = str_replace('$', '', $this->listPrice);
      $this->listPrice = str_replace(',', '', $this->listPrice);
      $this->listPrice = floatval($this->listPrice);

      $this->ourPrice = $xml['OfferSummary']['LowestNewPrice']['FormattedPrice'];
      $this->ourPrice = str_replace('$', '', $this->ourPrice);
      $this->ourPrice = str_replace(',', '', $this->ourPrice);
      $this->ourPrice = floatval($this->ourPrice);

      $this->salesRank = $xml['SalesRank'];
      $this->availability = $xml['Offers']['Offer']['OfferListing']['Availability'];
      $this->avgCustomerRating = $xml['CustomerReviews']['AverageRating'];

      $reviewCount = 0;

      if (is_array($xml['CustomerReviews']['Review'])) {
          foreach($xml['CustomerReviews']['Review'] as $review) {
            $this->reviews[$reviewCount]['Rating'] = $review['Rating'];
            $this->reviews[$reviewCount]['Summary'] = $review['Summary'];
            $this->reviews[$reviewCount]['Content'] = $review['Content'];
            $reviewCount++;
          }
      }

      $similarProductCount = 0;

      if (is_array($xml['SimilarProducts']['SimilarProduct'])) {
          foreach($xml['SimilarProducts']['SimilarProduct'] as $similar) {
            $this->similarProducts[$similarProductCount]['Title'] = $similar['Title'];
            $this->similarProducts[$similarProductCount]['ASIN'] = $review['ASIN'];
            $similarProductCount++;
          }
      }


    } else   {
      // using REST

      $this->ASIN = (string)$xml->ASIN;
      $this->productName = (string)$xml->ItemAttributes->Title;
      if($xml->ItemAttributes->Author) {
        foreach($xml->ItemAttributes->Author as $author) {
          $this->authors[] = (string)$author;
        }
      }
      $this->releaseDate = (string)$xml->ItemAttributes->PublicationDate;
      $this->manufacturer = (string)$xml->ItemAttributes->Manufacturer;
      $this->imageUrlMedium = (string)$xml->MediumImage->URL;
      $this->imageUrlLarge = (string)$xml->LargeImage->URL;

      $this->listPrice = (string)$xml->ItemAttributes->ListPrice->FormattedPrice;
      $this->listPrice = str_replace('$', '', $this->listPrice);
      $this->listPrice = str_replace(',', '', $this->listPrice);
      $this->listPrice = floatval($this->listPrice);

      $this->ourPrice = (string)$xml->OfferSummary->LowestNewPrice->FormattedPrice;
      $this->ourPrice = str_replace('$', '', $this->ourPrice);
      $this->ourPrice = str_replace(',', '', $this->ourPrice);
      $this->ourPrice = floatval($this->ourPrice);

      $this->salesRank = (string)$xml->SalesRank;
      $this->availability = (string)$xml->Offers->Offer->OfferListing->Availability;
      $this->avgCustomerRating = (float)$xml->CustomerReviews->AverageRating;

      $reviewCount = 0;

      if($xml->CustomerReviews->Review) {
        foreach ($xml->CustomerReviews->Review as $review) {
          $this->reviews[$reviewCount]['Rating'] = (float)$review->Rating;
          $this->reviews[$reviewCount]['Summary'] = (string)$review->Summary;
          $this->reviews[$reviewCount]['Content'] = (string)$review->Content;
          $reviewCount++;
        }
      }

      $similarProductCount = 0;

      if($xml->SimilarProducts->SimilarProduct) {
        foreach ($xml->SimilarProducts->SimilarProduct as $similar) {
          $this->similarProducts[$similarProductCount]['Title'] = (string)$similar->Title;
          $this->similarProducts[$similarProductCount]['ASIN'] = (string)$similar->ASIN;
          $similarProductCount++;
        }
      }

    }
  }

  // most methods in this class are similar
  // and just return the private variable
  function similarProductCount() {
    return count($this->similarProducts);
  }

  function similarProduct($i) {
    return $this->similarProducts[$i];
  }

  function customerReviewCount() {
    return count($this->reviews);
  }

  function customerReviewRating($i) {
    return $this->reviews[$i]['Rating'];
  }

  function customerReviewSummary($i) {
    return $this->reviews[$i]['Summary'];
  }

  function customerReviewComment($i) {
    return $this->reviews[$i]['Content'];
  }

  function valid() {
    if(isset($this->productName) && ($this->ourPrice>0.001) && isset($this->ASIN)) {
      return true;
    } else {
      return false;
    }
  }

  function ASIN() {
    return padASIN($this->ASIN);
  }

  function imageURLMedium() {
    return $this->imageUrlMedium;
  }

  function imageURLLarge() {
    return $this->imageUrlLarge;
  }

  function productName() {
    return $this->productName;
  }

  function ourPrice() {
    return number_format($this->ourPrice,2, '.', '');
  }

  function listPrice() {
    return number_format($this->listPrice,2, '.', '');
  }

  function authors() {
    if(isset($this->authors)) {
      return $this->authors;
    } else {
      return false;
    }
  }

  function releaseDate() {
    if(isset($this->releaseDate)) {
      return $this->releaseDate;
    } else {
      return false;
    }
  }

  function avgCustomerRating() {
    if(isset($this->avgCustomerRating)) {
      return $this->avgCustomerRating;
    } else {
      return false;
    }
  }

  function manufacturer() {
    if(isset($this->manufacturer)) {
      return $this->manufacturer;
    } else {
      return false;
    }
  }

  function salesRank()  {
    if(isset($this->salesRank)) {
      return $this->salesRank;
    } else {
      return false;
    }
  }

  function availability() {
    if(isset($this->availability)) {
      return $this->availability;
    } else {
      return false;
    }
  }
}
?>