import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService ){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', request);
    let CurrentUser = JSON.parse(localStorage.getItem('currentUser'));

    // if (request.url.indexOf('api/') >= 0) {	

    //   if(request.headers&&request.headers.Authorization)
    //   request.headers.Authorization = request.headers.Authorization.indexOf('Bearer ')>-1?('Bearer ' + getAccessToken()):request.headers.Authorization;
    // }

  if(request.url == "/api/oauth2/token")
  {
    request = request.clone({
      setHeaders: {
        'Content-Type': 'text/plain',
        //'Accept': 'application/json',
        'Authorization':'Basic MjAxOTY5RTFCRkQyNDJFMTg5RkU3QjYyOTdCMUI1QTQ6QzY1QTBEQzBGMjhDNDY5RkI3Mzc2Rjk3MkRFRkJDQjk='
      }
    })
  }
  else if(request.url == "/api/odata/NavigationMenus/Default.GetLoginMenuItems?$orderby=SortOrder")
  {
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json, text/plain, /',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        'Accept': 'application/json',
        'X-XSRF-TOKEN': this.cookieService.get('XSRF-TOKEN')
      }
    })
  }
    else {
      request = request.clone({
        setHeaders: {
          'Content-Type':  'application/json;charset=UTF-8',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
          'Accept': 'application/json',
         'X-XSRF-TOKEN': this.cookieService.get('XSRF-TOKEN')
        }
      })

    }


    return next.handle(request);
  }


  getAccessToken(token){
    if (token == "undefined" || token == "null" || token == null ) {
    
    } else {
        //getALLMenu(UserName);
    
    }
  }

//    //if ($location.absUrl())
//    var absUrl = $location.absUrl();
//    if (absUrl.toLowerCase().indexOf('login') == -1&&(getAccessToken() !== null&&getAccessToken()!=="null"&&$cookies["XSRF-TOKEN"] ))
//  {
//      $scope.GetConfigSetting();
//      $scope.GetUserMemberId();
//      $scope.GetFeatureLicenseDetail();
//      //$scope.GetFeatureLicenseAcessDetail();
//  }


// const copiedReq = req.clone({headers: req.headers.set( 'Content-Type', 'application/json')
//      .set('Access-Control-Allow-Methods', 'POST,OPTIONS, GET, PUT')
//     .set('client_id', 'C65A0DC0F28C469FB7376F972DEFBCB7')
//     .set('Application','web')
//     .set('tenantid', '1173')
//     .set('Access-Control-Allow-Credentials', 'true') 
//     .set('X-XSRF-TOKEN','Auth_7914b7a0b79743c6bfc12235dd435abe')
//     .set('Accept','application/json' )
//     .set('Access-Control-Allow-Headers','content-type, if-none-match' )
    
//     .set('Access-Control-Max-Age','3600' )
//     .set('Access-Control-Allow-Origin','*')});


}
