import VanillaContextMenu from 'vanilla-context-menu'
new VanillaContextMenu({
    scope: document.querySelector("body"),
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