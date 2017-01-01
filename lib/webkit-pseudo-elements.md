An ongoing project to catalogue all of these sneaky, hidden, bleeding edge selectors as I prepare my JSConf EU 2012 talk.

Everything is broken up by tag, but within each the selectors aren't particularly ordered. 

I have not tested/verified all of these. Have I missed some or got it wrong? Let me know. - A

A friendly reminder that you may need to set this property on your target/selected element to get the styling results you want:

`-webkit-appearance:none;`

&lt;video&gt;
-------------

`video::-webkit-media-controls-panel`

`video::-webkit-media-controls-play-button`

`video::-webkit-media-controls-volume-slider-container`

`video::-webkit-media-controls-volume-slider`

`video::-webkit-media-controls-mute-button`

`video::-webkit-media-controls-timeline`

`video::-webkit-media-controls-current-time-display`

`video::-webkit-full-page-media::-webkit-media-controls-panel`

`video::-webkit-media-controls-timeline-container`

`video::-webkit-media-controls-time-remaining-display`

`video::-webkit-media-controls-seek-back-button`

`video::-webkit-media-controls-seek-forward-button`

`video::-webkit-media-controls-fullscreen-button`

`video::-webkit-media-controls-rewind-button`

`video::-webkit-media-controls-return-to-realtime-button`

`video::-webkit-media-controls-toggle-closed-captions-button`

&lt;audio&gt;
-------------

`audio::-webkit-media-controls-panel`

`audio::-webkit-media-controls-mute-button`

`audio::-webkit-media-controls-play-button`

`audio::-webkit-media-controls-timeline-container`

`audio::-webkit-media-controls-current-time-display`

`audio::-webkit-media-controls-time-remaining-display`

`audio::-webkit-media-controls-timeline`

`audio::-webkit-media-controls-volume-slider-container`

`audio::-webkit-media-controls-volume-slider`

`audio::-webkit-media-controls-seek-back-button`

`audio::-webkit-media-controls-seek-forward-button`

`audio::-webkit-media-controls-fullscreen-button`

`audio::-webkit-media-controls-rewind-button`

`audio::-webkit-media-controls-return-to-realtime-button`

`audio::-webkit-media-controls-toggle-closed-captions-button`


&lt;input type="range"&gt;
-------------------

`input[type="range"]::-webkit-slider-thumb`


&lt;input type="file"&gt;
-------------------------

`input[type="file"]::-webkit-file-upload-button`

&lt;input type="number"&gt;
---------------------------

`input[type="number"]::-webkit-inner-spin-button`

`input[type="number"]::-webkit-outer-spin-button`

Form validation message-bubbe (WebKit r82180 or later)
------------------------------------------------------

`::-webkit-validation-bubble`

`::-webkit-validation-bubble-arrow-clipper`

`::-webkit-validation-bubble-arrow`

`::-webkit-validation-bubble-message`

&lt;progress&gt;
----------------

`progress::-webkit-progress-bar`

`progress::-webkit-progress-value`

&lt;meter&gt;
-------------

`meter::-webkit-progress-bar`

`meter::-webkit-meter-optimum-value`

`meter::-webkit-meter-suboptimum-value`

`meter::-webkit-meter-even-less-good-value`

Search
------

`::-webkit-search-cancel-button`

`::-webkit-search-decoration`

`::-webkit-search-results-button`

`::-webkit-search-results-decoration`

Scrollbar
---------

`::-webkit-scrollbar`

`::-webkit-scrollbar-button`

`::-webkit-scrollbar-corner`

`::-webkit-scrollbar-thumb`

`::-webkit-scrollbar-track`

`::-webkit-scrollbar-track-piece`

Unsorted/Haven't investigated usage at all yet (Could contain dupes)
--------------------------------------------------------------------
-webkit-inner-spin-button

-webkit-input-placeholder

-webkit-input-speech-button

-webkit-meter-horizontal-bar

-webkit-meter-horizontal-even-less-good-value

-webkit-meter-horizontal-optimum-value

-webkit-meter-horizontal-suboptimal-value

-webkit-meter-vertical-bar

-webkit-outer-spin-button

-webkit-progress-bar-value

-webkit-resizer



