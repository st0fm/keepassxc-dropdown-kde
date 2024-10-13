Based on: https://github.com/vgobbo/alacritty-dropdown-kde

# KeepassXC Dropdown
Win script that adds drop-down feature to Alacritty.

It provides:
- Display/hide KeepassXC when `Meta+x` is pressed.
- Make KeepassXC window _always on top_ of other windows.
- Make KeepassXC visible in all desktops.
- Make KeepassXC fullscreen.

What it doesn't provide:
- Start KeepassXC.
- Move KeepassXC to multiple displays (it is always displayed in display that it was started from).

*Works only on KDE.*

## Requirements

From version 0.3 (tag v0.3.0) only KDE 6 is supported. For KDE 5, use version 0.2.2 (tag v0.2.2).

Current requirements:
- KDE Plasma >= 6.1
- KDE Frameworks >= 6.5
- Qt >= 6.7

Requirements are based on the version which I am running, so it might work on earlier versions of the afore mentioned components.

## Installing

- Clone somewhere and `cd` into:i
```bash
cd keepassxc-dropdown-kde
```

- Inspect the code, so nothing weird is being added to your computer ;D

- Install:
```bash
kpackagetool6 --type=KWin/Script -i .
```

If you are upgrading, use:
```bash
kpackagetool6 --type=KWin/Script -u .
```

If you just upgraded to KDE 6 from KDE 5, you might have to manually remove the old plugin and then install it fresh.

- Enable by pressing `Meta+x`, typing _KWin Scripts_ and selecting _Alacritty Drop-Down_ in the script list.

## Debugging

The preferred way is through `wm console`, according to KDE documentation. But it didn't work for me, so I relied on `journalctl` for debugging:
```bash
journalctl -f -t kwin_wayland
```

