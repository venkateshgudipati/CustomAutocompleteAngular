import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4NjViZWUxMS00ZTgxLTQ2NWItOGI1Ny01NWZhZWQxMDk4ZWYiLCJlbWFpbCI6InN1cGVyQHJhZGlhbmNvbm5lY3QuY29tIiwiTG9nZ2VkaW5JZCI6Ijg3IiwiR3JvdXBJZCI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6InN1cGVyQHJhZGlhbmNvbm5lY3QuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiU3VwZXJBZG1pbiIsImV4cCI6MTU2NTk3NDA0MCwiaXNzIjoiaHR0cDovL3d3dy5jb3ZhbGVuc2UuY29tLyIsImF1ZCI6Imh0dHA6Ly93d3cuY292YWxlbnNlLmNvbS8ifQ.fpzL53JixV_vHW8SQ-L89HDgXHXiMQ6GMuZYmJFWfbc`
                }
            });

        return next.handle(request);
    }
}
