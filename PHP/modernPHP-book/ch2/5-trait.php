<?php 
  // 定义 trait
  // trait MyTrait{
  // ...
  // }

  trait Geocodable{
    
    // 地址
    protected $address;
    // willdurand/geocoder组建 http://geocoder-php.org/
    // \Geocoder\Geocoder
    // 地理编码器对象
    protected $geocoder;
    // 地理编码器处理后得到的结果对象
    // \Geocoder\Model\AddressCollection
    protected $geocoderResult;

    // 注入 Geocoder 对象
    public function setGeocoder(Geocoder\Geocoder $geocoder){
      $this->geocoder = $geocoder;
    }

    // 设定地址
    public function setAddress($address){
      echo 'set Address as: ' . $address;
      $this->address = $address;
    }

    // 下面两个获取经纬度
    public function getLatitude(){
      if(isset($this->geocoderResult)===FALSE){
        $this->getcodeAddress();
      }

      return $this->geocoderResult->first()->getLatitude();
    }

    public function getLongitude(){
      if(isset($this->geocoderResult)===FALSE){
        $this->getcodeAddress();
      }
      return $this->geocoderResult->first()->getLongitude();
    }

    // 地址字符串传给 Geocoder 实例，获取经地理编码器处理得到的结果
    protected function getcodeAddress(){
      $this->geocoderResult = $this->geocoder->geocode($this->address);
      return true;
    }
  }

  // 命名空间和性状都使用 use 关键字倒入，导入的位置有所不同。
  // 命名空间／类／接口／函数／和常量在类的定义体外导入，性状在类的定义体内导入

  // 使用 trait
  // class MyClass{
  //   use MyTrait;
  //   ...
  // }

  class RetailStore{
    use Geocodable;
  }

  // 官网实例
  // $curl     = new \Ivory\HttpAdapter\CurlHttpAdapter();
  // $geocoder = new \Geocoder\Provider\GoogleMaps($curl);
  // $geocoder->geocode(...);
  // $geocoder->reverse(...);

  require 'vendor/autoload.php';
  use Ivory\HttpAdapter\CurlHttpAdapter;
  use Geocoder\Provider\GoogleMaps;

  $curl = new CurlHttpAdapter();
  $geocoder = new GoogleMaps($curl);

  $store = new RetailStore();
  $store->setAddress('shenzhen');
  $store->setGeocoder($geocoder);

  $latitue = $store->getLatitude();
  $longitude = $store->getLongitude();
  echo $latitude,':',$longitude;
?>

