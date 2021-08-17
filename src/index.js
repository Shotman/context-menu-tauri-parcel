import VanillaContextMenu from 'vanilla-context-menu'
// const VanillaContextMenu = require('vanilla-context-menu')
new VanillaContextMenu({
    scope: document.querySelector("body"),
    customThemeClass: "testClassTheme",
    menuItems: [
      {
        label: 'Copy',
        callback: () => {
          alert("copy")
        },
      },
      'hr',
      {
        label: 'Paste',
        callback: () => {
            alert("paste")
        },
      },
    ],
  });