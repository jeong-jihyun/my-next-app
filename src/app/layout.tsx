import './globals.css'
import { Metadata } from "next";

// 라틴 문자 부분 집합으로 설정되어 있어 페이지 로딩 속도를 개선하고 사용자 경험을 향상하는데 도움
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generate by create next app",
};
export default function RootLayOut({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
