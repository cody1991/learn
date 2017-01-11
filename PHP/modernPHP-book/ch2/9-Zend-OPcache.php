<?php 
  phpinfo();
  echo "<pre>";
  // Returns an array containing the currently used configuration OpCache uses. This includes all ini settings as well as version information and blacklisted files.
  var_dump(opcache_get_configuration());

  // This will return an array with information about the current status of the cache. This information will include things like: the state the cache is in (enabled, restarting, full etc), the memory usage, hits, misses and some more useful information. It will also contain the cached scripts.

  var_dump(opcache_get_status());

  // Resets the entire cache. Meaning all possible cached scripts will be parsed again on the next visit.

  // opcache_reset():

  // Invalidates a specific cached script. Meaning the script will be parsed again on the next visit.

  // opcache_invalidate():
  // opcache_invalidate('/path/to/script/to/invalidate.php', true);

  echo "<pre>";

?>
