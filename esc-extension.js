var EscExtension = {
  currentUrl: new URL(document.location),
  init: function () {
    if (EscExtension.currentUrlContain("/maps")) {
      EscExtension.appendPanelEsc();
      EscExtension.ShowSnackbar(new URL(document.location));
    }
  },
  currentUrlContain: function (str) {
    return EscExtension.currentUrl.pathname.includes(str);
  },
  ShowSnackbar: function (text) {
    $JQ(document).ready(function () {
      if ($JQ("snackbar")) {
        $JQ("snackbar").remove();
      }

      const body = $JQ("body");
      body.append(`<div id="snackbar">${text}</div>`);

      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 10000);
    });
  },
  appendPanelEsc: function () {
    var html = `<div class="float-nav">
        <a href="#" class="menu-btn">
          <ul>
            <li class="line"></li>
            <li class="line"></li>
            <li class="line"></li>
          </ul>
          <div class="menu-txt">เมนู</div>
        </a>
      </div>
      
      <div class="main-nav">
      <h1 class="text-3xl font-bold text-red-600">
        Hello world!
        </h1>
        <ul>
          <li><a href="#" id="btn-save">บันทึกข้อมูล</a></li>
          <li><a href="#open-modal" id="login">เข้าสู่ระบบ</a></li>
        </ul>
      </div>
      <div id="open-modal" class="modal-window">
  <div>
    <a href="#" title="Close" class="modal-close">ปิด</a>
    <h1>เข้าสู่ระบบ</h1>
    <div>Esc.</div>
    <br>
    <div class="text-center">
        <input>
    </div>
  </div>
</div>
</div>
      `;
    $JQ(document).ready(function () {
      const body = $JQ("body");
      body.append(html);
      $JQ(".float-nav").click(function () {
        $JQ(".main-nav, .menu-btn").toggleClass("active");
      });

      $JQ("#btn-save").click(function () {
        const listItems = document.querySelectorAll('[role="listitem"]');

        listItems.forEach((listItem, index) => {
          const inputElement = listItem.querySelector(
            ".tactile-searchbox-input"
          );
          if (inputElement) {
            const value = inputElement.getAttribute("aria-label");
            console.log(`Value of input ${index}: ${value}`);
          }
        });

        const selectedTime = document.querySelector(
          ".selected div div div div"
        );
        const selectedKilo = document.querySelector(
          ".selected div div div div div"
        );
        if (selectedTime) {
          const timeValue = selectedTime.textContent.trim();
          console.log(timeValue);
        }
        if (selectedKilo) {
          const distanceValue = selectedKilo.textContent.trim();
          console.log(distanceValue);
        }

        const buttonElement = document.querySelector(
          `button[data-tooltip="คัดลอกที่อยู่"]`
        );

        if (buttonElement) {
          const ariaLabelValue = buttonElement.getAttribute("aria-label");
          console.log(ariaLabelValue);
        }
      });
    });
  },
};

$JQ(document).ready(function () {
  try {
    EscExtension.init();
  } catch (err) {
    console.log("EscExtension ERROR: " + err.message);
  }
});
