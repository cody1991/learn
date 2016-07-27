# get

    axios.get('/user?ID=12345')
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error);
        });

can also be

    axios.get('/user',{
            params:{
                ID:12345
            }
        })
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error);
        });

# post

    axios.post('/user',{
        firstName:'Fred',
        lastName:'Flintstone'
    })
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });

# multiple

    function getUserAccount(){
        return axios.get('/user/12345');
    }

    function getUserPermissions(){
        return axios.get('/user/12345/permissions');
    }

    axios.all([getUserAccount(),getUserPermissions()])
        .then(axios.spread(function(acct,perms){
            <!-- both requests are now complete -->
        }));

# api

## axios(config)

    axios({
        method:'post',
        url:'/user/12345',
        data:{
            firstName:'Fred',
            lastName:'Flintstone'
        }
    });

## axios(url,config)

    axios('/user/12345');

## request method aliases

    axios.request(config);
    axios.get(url[,config]);
    axios.delete(url[,config]);
    axios.head(url[,config]);
    axios.post(url[,data[,config]]);
    axios.put(url[,data[,config]]);
    axios.patch(url[,data[,config]]);

## concurrency

    axios.all(iterable)
    axios.spread(callback)

## creating an instance

    axios.create([config])

    var instance = axios.create({
            baseURL: 'https://some-domain.com/api',
            timeout:1000,
            headers:{'X-Custom-Header':'foobar'}
        });

## instance methods

    The available instance methods are listed below. The specified config will be merged with the instance config.

    axios#request(config)
    axios#get(url[,config])
    axios#delete(url[,config])
    axios#head(url[,config])
    axios#post(url[,data[,config]])
    axios#put(url[,data[,config]])
    axios#patch(url[,data[,config]])

## request config

    {
        // `url` is the server URL that will be used for the request
        url:'/user',
        // `method` is the request method to be used when making the request
        method:'get',
        // `baseURL` will be prepended to `url` unless `url` is absolute.
        // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
        // to methods of that instance.
        baseURL:'https://some-domain.com/api/',
        // `transformRequest` allows changes to the request data before it is sent to the server
        // This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
        // The last function in the array must return a string, an ArrayBuffer, or a Stream
        transformRequest:[function(data){
            // Do whatever you want to transform the data
            return data;
        }],
        // `transformResponse` allows changes to the response data to be made before
        // it is passed to then/catch
        transformResponse:[function(data){
            return data;
        }],
        // `headers` are custom headers to be sent
        headers:{'X-Requested-Width':'XMLHttpRequest'},
        // `params` are the URL parameters to be sent with the request
        // Must be a plain object or a URLSearchParams object
        params:{
            ID:12345
        },
        // `paramsSerializer` is an optional function in charge of serializing `params`
        // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
        paramsSerializer:function(params){
            return Qs.stringify(params,{
                arrayFormat:'brakets'
            });
        },
        // `data` is the data to be sent as the request body
      // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
      // When no `transformRequest` is set, must be of one of the following types:
      // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
      // - Browser only: FormData, File, Blob
      // - Node only: Stream
        data:{
            firstName:'Fred'
        },
        // `timeout` specifies the number of milliseconds before the request times out.
        // If the request takes longer than `timeout`, the request will be aborted.
        timeout:1000,
        // `withCredentials` indicates whether or not cross-site Access-Control requests
        // should be made using credentials
        withCredetials:false,
        // `adapter` allows custom handling of requests which makes testing easier.
        // Return a promise and supply a valid response (see [response docs](#response-api)).
        adapter:function(config){

        },
        // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
        // This will set an `Authorization` header, overwriting any existing
        // `Authorization` custom headers you have set using `headers`.
        auth:{
            username:'janedoe',
            password:'s00pers3cret'
        },
        // `responseType` indicates the type of data that the server will respond with
        // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
        responseType:'json',
        // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
        xsrfCookieName:'XSRF-TOKEN',
        // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
        xsrfHeaderName:'X-XSRF-TOKEN',
        // `progress` allows handling of progress events for 'POST' and 'PUT uploads'
        // as well as 'GET' downloads
        progress:function(progressEvent){
            // Do whatever you want with the native progress event
        },
        // `maxContentLength` defines the max size of the http response content allowed
        maxContentLength:2000,
        // `validateStatus` defines whether to resolve or reject the promise for a given
        // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
        // or `undefined`), the promise will be resolved; otherwise, the promise will be
        // rejected.
        validateStatus:function(status){
            return status>=200 && status<300;
        },
        // `maxRedirects` defines the maximum number of redirects to follow in node.js.
        // If set to 0, no redirects will be followed.
        maxRedirects:5,
        // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
        // and https requests, respectively, in node.js. This allows to configure options like
        // `keepAlive` that are not enabled by default.
        httpAgent:new http.Agent({
            keepAlive:true
        }),
        httpsAgent:new https.Agent({
            keepAlive:true
        })
    }

## Response Schema

    {
        // `data` is the response that was provided by the server
        data:{

        },
        // `status` is the HTTP status code from the server response
        status:200,
        // `statusText` is the HTTP status message from the server response
        statusText:'OK',
        // `headers` the headers that the server responded with
        headers:{

        },
        // `config` is the config that was provided to `axios` for the request
        config:{}
    }

    axios.get('/user/12345')
        .then(function(response){
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
    });

##config Defaults

### global axios defaults

    axios.defaults.baseURL = 'https://api.example.com';
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

### custom install defaults

    // Set config defaults when creating the instance
    var instance = axios.create({
      baseURL: 'https://api.example.com'
    });

    // Alter defaults after instance has been created
    instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

## handing errors

    axios.get('/user/12345')
        .catch(function(error){
            if(error.response){
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }else{
                console.log('Error',error.message);
            }
            consoel.log(error.config);
        })
