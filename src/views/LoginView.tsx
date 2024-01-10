function LoginView() {
  return (
    <div
      className="w-screen h-screen overflow-auto bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="absolute w-1/4 top-0 bottom-0 right-0 bg-white z-20 p-5">
        <h1 className="font-semibold text-2xl mb-10">Login Point Of Sale System</h1>

        <form>
            <input type="text" name="" id="" />
        </form>
      </div>
    </div>
  );
}

export default LoginView;
