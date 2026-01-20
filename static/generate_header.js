const subpageHeader = document.getElementById("subpage-header");
const fname = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
);
subpageHeader.innerHTML = `
    <h1>${fname}</h1>
`;