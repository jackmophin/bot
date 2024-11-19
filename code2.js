    document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "1000";

  const passwordWindow = document.createElement("div");
  passwordWindow.id = "passwordWindow";
  passwordWindow.style.backgroundColor = "black";
  passwordWindow.style.padding = "20px";
  passwordWindow.style.borderRadius = "8px";
  passwordWindow.style.textAlign = "center";
  passwordWindow.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  passwordWindow.style.width = "300px";
  passwordWindow.style.display = "flex";
  passwordWindow.style.flexDirection = "column";

  const nicknameGroup = document.createElement("div");
  nicknameGroup.id = "nicknameGroup";
  nicknameGroup.style.display = "none";
  nicknameGroup.style.flexDirection = "column";

  const nicknameLabel = document.createElement("h2");
  nicknameLabel.innerText = "Введите Никнейм";
  nicknameLabel.style.color = 'white';
  nicknameGroup.appendChild(nicknameLabel);

  const nicknameInput = document.createElement("input");
  nicknameInput.type = "text";
  nicknameInput.style.color = 'white';
  nicknameInput.id = "nicknameInput";
  nicknameInput.placeholder = "Введите никнейм...";
  nicknameInput.style.padding = '5px';
  nicknameInput.style.margin = '5px';
  nicknameGroup.appendChild(nicknameInput);

  const passwordLabel = document.createElement("h2");
  passwordLabel.style.color = 'white';
  passwordLabel.innerText = "Введите Пароль";
  passwordWindow.appendChild(passwordLabel);

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.style.color = 'white';
  passwordInput.id = "passwordInput";
  passwordInput.style.padding = '5px';
  passwordInput.style.margin = '5px';
  passwordInput.placeholder = "Введите пароль...";
  passwordWindow.appendChild(passwordInput);

  const continueBtn = document.createElement("button");
  continueBtn.id = "continueBtn";
  continueBtn.innerText = "Продолжить";
  continueBtn.style.marginTop = "25px"
  passwordWindow.appendChild(continueBtn);

  passwordWindow.appendChild(nicknameGroup);
  overlay.appendChild(passwordWindow);
  document.body.appendChild(overlay);

  const storedNickname = localStorage.getItem("nickname");
  const correctPassword = "elka295";

  if (!storedNickname) {
    nicknameGroup.style.display = "flex";
  }

  continueBtn.addEventListener("click", () => {
    const enteredNickname = nicknameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    if (!storedNickname) {
      if (!enteredNickname) {
        alert("Введите корректный никнейм!");
        return;
      }

      if (enteredPassword === correctPassword) {
        localStorage.setItem("nickname", enteredNickname);
        alert(`Добро пожаловать, ${enteredNickname}!`);
        overlay.style.display = "none";
      } else {
        alert("Неверный пароль");
      }
    } else {
      if (enteredPassword === correctPassword) {
        alert(`С возвращением, ${storedNickname}!`);
        overlay.style.display = "none";
      } else {
        alert("Неверный пароль!");
      }
    }
  });
});
