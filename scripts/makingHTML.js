const page = document.querySelector(".page"); // this one is for dikhane ke liye
let rederHtml = "";
export function renderCreateHtml(obj) {
  rederHtml += `
        <header class="header">
        <img src="logos/logo-mark.svg" alt="logo of the company" />
        <h1>Coding Conf</h1>
      </header>
  
  
  <main class="main">
        <article class="container">
          <section class="congrats_msg">
            <h1>Congrats, <span id="name">${obj.name}</span></h1>
            <h1>Your ticket is ready.</h1>
          </section>
          <section class="confirm_msg">
            <p>
              We've emailed your ticket to
              <span id="email">${obj.email}</span> and will send updates in
              the run up to the event.
            </p>
          </section>

          <section class="ticket">
            <img class="ticket-bg" src="patterns/pattern-ticket.svg" alt="" />
            <div class="ticket-content">
              <div class="ticket-left">
                <div class="ticket-top">
                  <div class="ticket-header">
                    <img src="logos/logo-mark.svg" alt="logo" />
                    <h2>Coding Conf</h2>
                  </div>
                  <p class="ticket-date">Jan 31, 2025 / Austin, TX</p>
                </div>
                <div class="ticket-user">
                  <img class="avatar" src="${obj.avatar}" alt="Jonatan" />
                  <div>
                    <p class="name">${obj.name}</p>
                    <p class="github">
                      <img src="logos/icon-github.svg" id="git" />@${obj.gitHub}
                    </p>
                  </div>
                </div>
              </div>

              <div class="ticket-right">
                <p class="ticket-number">#06960</p>
              </div>
            </div>
          </section>
        </article>
      </main>`;

  page.innerHTML = rederHtml;
}
