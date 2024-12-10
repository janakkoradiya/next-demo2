

import { NextResponse } from 'next/server';

export function middleware(req) {
    const userData = req.cookies.get('userData'); // Get the user data from cookies
    const accessToken = req.cookies.get('access_token'); 

    // Matching protected pages (all paths under /protected/)
    const authPages = ['/auth/login', '/auth/registration', '/auth/reset-password'];
    const currentPath = req.nextUrl.pathname;

    console.log("userData ----- ",userData)
    console.log("accessToken ----- ", JSON.stringify(accessToken))
    console.log("currentPath --- "+currentPath)

    // Check if user is authenticated and trying to access protected pages
    if (!userData && !accessToken && currentPath.startsWith('/protected/')) {
        // Redirect to login page if user is not authenticated
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    // Check if user is already authenticated and trying to access auth pages
    if (userData && authPages.includes(currentPath) ) {
        // Redirect to home if user is already authenticated
        return NextResponse.redirect(new URL('/protected/home', req.url));
    }

    // Allow request to continue
    return NextResponse.next();
}

export const config = {
    // Use :path* to match all routes under /auth/ and /protected/
    matcher: ['/auth/:path*', '/protected/:path*', '/:path*'],
};


// import { NextResponse } from 'next/server';

// export function middleware(req) {
//   const userData = req.cookies.get('userData'); // Retrieve user data from cookies
//   const accessToken = req.cookies.get('access_token'); // Retrieve access token from cookies
//   const currentPath = req.nextUrl.pathname;

//   // Paths requiring authentication
//   const authPages = ['/auth/login', '/auth/registration', '/auth/reset-password'];

//   console.log("userData: ", userData);
//   console.log("accessToken: ", JSON.stringify(accessToken));
//   console.log("currentPath: ", currentPath);

//   console.log("authPages.includes(currentPath) ----" +authPages.includes(currentPath))

//   // Redirect unauthenticated users trying to access protected routes
//   if (!userData && !authPages.includes(currentPath)) {
//     return NextResponse.redirect(new URL('/auth/login', req.url));
//   }

//   if (!userData && authPages.includes(currentPath)) {
//     return NextResponse.redirect(new URL('/auth/login', req.url));
//   }

//   // Redirect authenticated users trying to access auth pages
//   if (userData && authPages.includes(currentPath)) {
//     return NextResponse.redirect(new URL('/demo', req.url)); // Redirect to a home/dashboard page
//   }

//   // Allow request to continue
//   return NextResponse.next();
// }

// // Configure middleware matcher to apply to specific routes
// export const config = {
//   matcher: ['/auth/:path*', '/:path*'], // Adjust to match all routes except specific ones
// };