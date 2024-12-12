import { NextResponse } from 'next/server';
import jwt from "jsonwebtoken";

export function middleware(req) {

    const userData = req.cookies.get('userData');
    const access_token = req.cookies.get('access_token');
    const isTokenValid = access_token && access_token.value ? decodeToken(access_token.value) : false;

    // console.log("access_token --- "+(access_token && access_token.value ? access_token.value : ""))
    console.log("isTokenValid ---- "+isTokenValid)

    const authPages = ['/auth/login', '/auth/registration', '/auth/reset-password'];
    const protectedPages = ['/protected/home', '/protected/dashboard'];
    const publicPages = ['/about', '/contact'];


    const currentPath = req.nextUrl.pathname;

    if ((!userData || !isTokenValid) && protectedPages.includes(currentPath)) {
        // Redirect to login page if user is not authenticated
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    if (userData && authPages.includes(currentPath) && isTokenValid) {
        // Redirect to home if user is already authenticated
        return NextResponse.redirect(new URL('/protected/home', req.url));
    } 


    // ------- Dont' touch ---  start

    // if ((!userData && protectedPages.includes(currentPath)) ) {
    //     // Redirect to login page if user is not authenticated
    //     return NextResponse.redirect(new URL('/auth/login', req.url));
    // }

    // if (userData && authPages.includes(currentPath) ) {
    //     // Redirect to home if user is already authenticated
    //     return NextResponse.redirect(new URL('/protected/home', req.url));
    // } 

    // ------- Dont' touch ----- End



    // if (!userData){

    //     if(protectedPages.includes(currentPath)) {
    //         console.log("1"+ currentPath)
    //         // Redirect to login page if user is not authenticated
    //         return NextResponse.redirect(new URL('/auth/login', req.url));
    //     }
    //     else if (authPages.includes(currentPath) || publicPages.includes(currentPath)){
    //         console.log("2 -- "+ currentPath)
    //         // Allow access to auth pages and public pages if not authenticated
    //         return NextResponse.redirect(new URL(currentPath, req.url));
    //         // return NextResponse.next();
    //     }
    //     else {
    //         console.log("3"+ currentPath)
    //         return NextResponse.redirect(new URL('/auth/login', req.url));
    //     }
    // }

    // if (userData && authPages.includes(currentPath)) {
    //     // Redirect to home if user is already authenticated
    //     console.log("4"+ currentPath)
    //     return NextResponse.redirect(new URL('/protected/home', req.url));
    // } 

    // if (!userData) {
    //     if (authPages.includes(currentPath) || publicPages.includes(currentPath)) {
    //         // Allow access to auth pages and public pages if not authenticated
    //         return NextResponse.next();
    //     }

    //     // Redirect to /auth/login for any other page if not authenticated
    //     return NextResponse.redirect(new URL('/auth/login', req.url));
    // }

    // if (userData) {
    //     if (authPages.includes(currentPath)) {
    //         // Redirect authenticated users away from auth pages to /protected/home
    //         return NextResponse.redirect(new URL('/protected/home', req.url));
    //     }

    //     if (publicPages.includes(currentPath)) {
    //         // Allow authenticated users to access public pages
    //         return NextResponse.next();
    //     }

    //     // Allow access to other pages if authenticated
    //     return NextResponse.next();
    // }

    // Allow request to continue
    return NextResponse.next();
}

export const config = {
    matcher: ['/auth/:path*', '/protected/:path*', '/:path*'],
};

function decodeToken(token) {
    try {
        const decodedToken = jwt.decode(token);

        if (!decodedToken || !decodedToken.exp) {
            return false;
        }

        const currentTime = Math.floor(Date.now() / 1000);
        return decodedToken.exp > currentTime;
    } catch (err) {
        console.error("Token decoding error:", err);
        return false;
    }
}



// import { NextResponse } from 'next/server';

// export function middleware(req) {
//     const userData = req.cookies.get('userData');
//     console.log("userData ---- "+JSON.stringify(userData))
    
//     const authPages = ['/auth/login', '/auth/registration', '/auth/reset-password'];
//     const publicPages = ['/about', '/contact']; // Static or public pages
//     const currentPath = req.nextUrl.pathname;

//     if (!userData) {
//         if (authPages.includes(currentPath) || publicPages.includes(currentPath)) {
//             // Allow access to auth pages and public pages if not authenticated
//             return NextResponse.next();
//         }

//         // Redirect to /auth/login for any other page if not authenticated
//         return NextResponse.redirect(new URL('/auth/login', req.url));
//     }

//     if (userData) {
//         if (authPages.includes(currentPath)) {
//             // Redirect authenticated users away from auth pages to /protected/home
//             return NextResponse.redirect(new URL('/protected/home', req.url));
//         }

//         if (publicPages.includes(currentPath)) {
//             // Allow authenticated users to access public pages
//             return NextResponse.next();
//         }

//         // Allow access to other pages if authenticated
//         return NextResponse.next();
//     }

//     // Default behavior for unexpected paths
//     return NextResponse.redirect(new URL('/auth/login', req.url));
// }

// export const config = {
//     matcher: ['/auth/:path*', '/protected/:path*', '/:path*'],
// };



// import { NextResponse } from 'next/server';

// export function middleware(req) {
//     const userData = req.cookies.get('userData'); // Get the user data from cookies
//     const accessToken = req.cookies.get('access_token');

//     // Matching protected pages (all paths under /protected/)
//     const authPages = ['/auth/login', '/auth/registration', '/auth/reset-password'];
//     const currentPath = req.nextUrl.pathname;

//     console.log("userData ----- ",userData)
//     console.log("accessToken ----- ", JSON.stringify(accessToken))
//     console.log("currentPath --- "+currentPath)

//     // Check if user is authenticated and trying to access protected pages
//     if (!userData && !accessToken && currentPath.startsWith('/protected/')) {
//         // Redirect to login page if user is not authenticated
//         return NextResponse.redirect(new URL('/auth/login', req.url));
//     }

//     // Check if user is already authenticated and trying to access auth pages
//     if (userData && authPages.includes(currentPath) ) {
//         // Redirect to home if user is already authenticated
//         return NextResponse.redirect(new URL('/protected/home', req.url));
//     }

//     // Allow request to continue
//     return NextResponse.next();
// }

// export const config = {
//     // Use :path* to match all routes under /auth/ and /protected/
//     matcher: ['/auth/:path*', '/protected/:path*', '/:path*'],
// };


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