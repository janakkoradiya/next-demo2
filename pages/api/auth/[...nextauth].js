import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = { id: 1, name: "Test User", email: "test@example.com" };
        if (credentials.username === "test" && credentials.password === "test") {
          return user; // Valid user
        }
        return null; // Invalid user
      },
    }),
  ],
  pages: {
    signIn: "/login", // Custom sign-in page
  },
});