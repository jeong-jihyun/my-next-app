const WelcomeMessage = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <div className="max-w-md p-4 mx-auto text-center">
      {isLoggedIn ? (
        <div className="text-xl font-bold text-blue-600">
          다시 오신 것을 환영합니다.
        </div>
      ) : (
        <div className="text-xl font-semibold text-blue-600 bg-gray-200">
          로그인 해주세요
        </div>
      )}
    </div>
  );
};

export default function Page() {
  return (
    <main className="flex flex-col p-4 space-y-2">
      <WelcomeMessage isLoggedIn={true} />
      <WelcomeMessage isLoggedIn={false} />
    </main>
  );
}
