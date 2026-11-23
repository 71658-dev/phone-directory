/* @ds-bundle: {"format":4,"namespace":"ShadcnUiDesignSystem_3aaf87","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"AspectRatio","sourcePath":"components/data-display/AspectRatio.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"InlineCode","sourcePath":"components/data-display/InlineCode.jsx"},{"name":"Progress","sourcePath":"components/data-display/Progress.jsx"},{"name":"ScrollArea","sourcePath":"components/data-display/ScrollArea.jsx"},{"name":"Separator","sourcePath":"components/data-display/Separator.jsx"},{"name":"Table","sourcePath":"components/data-display/Table.jsx"},{"name":"Accordion","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"Collapsible","sourcePath":"components/disclosure/Collapsible.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Label","sourcePath":"components/forms/Label.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Command","sourcePath":"components/menus/Command.jsx"},{"name":"ContextMenu","sourcePath":"components/menus/ContextMenu.jsx"},{"name":"DropdownMenu","sourcePath":"components/menus/DropdownMenu.jsx"},{"name":"Menu","sourcePath":"components/menus/Menu.jsx"},{"name":"MenuItem","sourcePath":"components/menus/MenuItem.jsx"},{"name":"Menubar","sourcePath":"components/menus/Menubar.jsx"},{"name":"NavigationMenu","sourcePath":"components/navigation/NavigationMenu.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"AlertDialog","sourcePath":"components/overlays/AlertDialog.jsx"},{"name":"Dialog","sourcePath":"components/overlays/Dialog.jsx"},{"name":"HoverCard","sourcePath":"components/overlays/HoverCard.jsx"},{"name":"Popover","sourcePath":"components/overlays/Popover.jsx"},{"name":"Tooltip","sourcePath":"components/overlays/Tooltip.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"5e1fe32ab9ae","components/data-display/AspectRatio.jsx":"88064734ae1c","components/data-display/Avatar.jsx":"2567cd95d677","components/data-display/InlineCode.jsx":"86cae71d72ae","components/data-display/Progress.jsx":"873642e09c75","components/data-display/ScrollArea.jsx":"62627cbcb514","components/data-display/Separator.jsx":"db1f4b86fbd8","components/data-display/Table.jsx":"f284cadc802f","components/disclosure/Accordion.jsx":"c39ead7e7ea5","components/disclosure/Collapsible.jsx":"2bb34a32c2df","components/forms/Checkbox.jsx":"5ca803b35c2d","components/forms/Input.jsx":"5d03bd0566aa","components/forms/Label.jsx":"57c3c303ea82","components/forms/RadioGroup.jsx":"890c7fd69fc7","components/forms/Select.jsx":"e120edab36d1","components/forms/Slider.jsx":"3bcecd53e02a","components/forms/Switch.jsx":"7ee42d18306c","components/forms/Textarea.jsx":"a1167703fe25","components/icons/Icon.jsx":"ac945d4b71b2","components/menus/Command.jsx":"f8125a33b802","components/menus/ContextMenu.jsx":"17ef4f1a26d4","components/menus/DropdownMenu.jsx":"f715da88cabf","components/menus/Menu.jsx":"fada9612cad6","components/menus/MenuItem.jsx":"1059138ad7a2","components/menus/Menubar.jsx":"5d138340930c","components/navigation/NavigationMenu.jsx":"c6ab327544b9","components/navigation/Tabs.jsx":"4a734769ca68","components/overlays/AlertDialog.jsx":"b6ae80257b96","components/overlays/Dialog.jsx":"8930274c66a1","components/overlays/HoverCard.jsx":"ac83f92ef69a","components/overlays/Popover.jsx":"365f3d4553cc","components/overlays/Tooltip.jsx":"41bf071dcc2e","ui_kits/web-app/App.jsx":"941fed5f79de","ui_kits/web-app/CoverScreen.jsx":"18f370cf257c","ui_kits/web-app/Demos.jsx":"ebff23c3f1ae","ui_kits/web-app/DocPage.jsx":"5156f57a0245","ui_kits/web-app/FoundationScreens.jsx":"e7ee6dad40f2","ui_kits/web-app/Header.jsx":"d16008960d1c","ui_kits/web-app/Sidebar.jsx":"f452af200daf"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ShadcnUiDesignSystem_3aaf87 = window.ShadcnUiDesignSystem_3aaf87 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data-display/AspectRatio.jsx
try { (() => {
/** Constrains children to a ratio; radius 6, clipped. */
function AspectRatio({
  ratio = 16 / 9,
  children,
  src,
  alt = '',
  radius = 6,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: String(ratio),
      borderRadius: radius,
      overflow: 'hidden',
      background: 'var(--slate-100)',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : children);
}
Object.assign(__ds_scope, { AspectRatio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/AspectRatio.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
/** 40px circular avatar with image + initials fallback. */
function Avatar({
  src,
  alt = '',
  fallback,
  size = 40,
  style
}) {
  const [err, setErr] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      flex: 'none',
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'inline-grid',
      placeItems: 'center',
      background: 'var(--slate-100)',
      color: 'var(--black)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: '14px',
      fontWeight: 500,
      ...style
    }
  }, src && !err ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    onError: () => setErr(true),
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : fallback);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/InlineCode.jsx
try { (() => {
/** Inline code chip — Menlo Bold 14/20 on slate-100, radius 3, padding 3/4. */
function InlineCode({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 700,
      color: 'var(--black)',
      background: 'var(--slate-100)',
      borderRadius: 3,
      padding: '3px 4px',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { InlineCode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/InlineCode.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Progress.jsx
try { (() => {
/** 16px pill progress bar — slate-100 track, slate-900 indicator. */
function Progress({
  value = 0,
  max = 100,
  height = 16,
  style
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemax": max,
    style: {
      width: '100%',
      height,
      borderRadius: 40,
      background: 'var(--slate-100)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      borderRadius: 40,
      background: 'var(--primary)',
      transition: 'width 300ms cubic-bezier(0.4,0,0.2,1)'
    }
  }));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Progress.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ScrollArea.jsx
try { (() => {
/** Bordered scroll container — 1px slate-200, radius 6, 16px padding, thin scrollbar. */
function ScrollArea({
  title,
  children,
  width = 190,
  height = 278,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: 16,
      border: '1px solid var(--border)',
      borderRadius: 6,
      background: 'var(--white)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '14px',
      fontWeight: 500,
      color: 'var(--foreground)'
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      scrollbarWidth: 'thin',
      scrollbarColor: 'var(--slate-300) transparent'
    }
  }, children));
}
Object.assign(__ds_scope, { ScrollArea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ScrollArea.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Separator.jsx
try { (() => {
/** 1px rule; horizontal or vertical. */
function Separator({
  orientation = 'horizontal',
  length,
  color = 'var(--border)',
  style
}) {
  const v = orientation === 'vertical';
  return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    "aria-orientation": orientation,
    style: {
      flex: 'none',
      background: color,
      width: v ? 1 : length || '100%',
      height: v ? length || 20 : 1,
      alignSelf: v ? 'center' : undefined,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Separator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Separator.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Table.jsx
try { (() => {
/** Bordered grid table — head Inter ExtraBold 16/24, cells Regular 16/24, padding 8/16, 1px slate-200. */
function Table({
  columns = [],
  rows = [],
  selectedIndex,
  onRowClick,
  style
}) {
  const cell = {
    padding: '8px 16px',
    border: '1px solid var(--border)',
    textAlign: 'left',
    fontSize: 16,
    lineHeight: '24px',
    verticalAlign: 'middle'
  };
  return /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)',
      color: 'var(--black)',
      background: 'var(--white)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      ...cell,
      fontWeight: 800,
      width: c.width
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    onClick: onRowClick ? () => onRowClick(r, i) : undefined,
    style: {
      background: selectedIndex === i ? 'var(--slate-50)' : 'transparent',
      cursor: onRowClick ? 'pointer' : 'default'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      ...cell,
      fontWeight: 400,
      color: selectedIndex === i ? 'var(--foreground)' : 'var(--black)',
      textAlign: c.align || 'left'
    }
  }, c.render ? c.render(r) : r[c.key]))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Table.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with optional label, helper text and trailing action — from the kit's "input" primitive. */
function Input({
  id,
  label,
  helper,
  size = 'default',
  labelPosition = 'top',
  placeholder,
  value,
  defaultValue,
  onChange,
  disabled = false,
  type = 'text',
  trailing,
  style,
  inputStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sm = size === 'sm';
  const field = /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      borderRadius: 8,
      padding: 2,
      margin: -2,
      boxShadow: focus ? '0 0 0 2px var(--ring)' : 'none',
      transition: 'box-shadow 150ms'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      height: sm ? 36 : 40,
      padding: '8px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: sm ? 14 : 16,
      lineHeight: sm ? '20px' : '24px',
      color: 'var(--foreground)',
      background: 'var(--white)',
      border: '1px solid var(--input)',
      borderRadius: 6,
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'text',
      ...inputStyle
    }
  }, rest)));
  const labelEl = label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 500,
      color: 'var(--foreground)',
      width: labelPosition === 'left' ? 84 : undefined,
      flex: 'none'
    }
  }, label) : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: labelPosition === 'left' ? 'row' : 'column',
      alignItems: labelPosition === 'left' ? 'center' : 'stretch',
      gap: labelPosition === 'left' ? 16 : 6,
      fontFamily: 'var(--font-sans)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, labelEl, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      flex: labelPosition === 'left' ? 1 : undefined
    }
  }, field, trailing), helper && labelPosition !== 'left' ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--muted-foreground)'
    }
  }, helper) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Accessible form label — Inter Medium 14/14. */
function Label({
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: '14px',
      fontWeight: 500,
      color: 'var(--foreground)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Label.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
/** Single-choice group — from the kit's "radio group" (16px circles, 8px dot). */
function RadioGroup({
  options = [],
  value,
  defaultValue,
  onValueChange,
  name,
  gap = 8,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const cur = value !== undefined ? value : inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    const on = cur === opt.value;
    return /*#__PURE__*/React.createElement("label", {
      key: opt.value,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        cursor: opt.disabled ? 'not-allowed' : 'pointer',
        opacity: opt.disabled ? 0.5 : 1
      },
      onClick: () => {
        if (opt.disabled) return;
        setInner(opt.value);
        onValueChange && onValueChange(opt.value);
      }
    }, /*#__PURE__*/React.createElement("span", {
      role: "radio",
      "aria-checked": on,
      style: {
        width: 16,
        height: 16,
        boxSizing: 'border-box',
        borderRadius: '50%',
        border: '1px solid var(--black)',
        background: 'var(--white)',
        display: 'grid',
        placeItems: 'center',
        flex: 'none'
      }
    }, on ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--black)'
      }
    }) : null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        lineHeight: '14px',
        fontWeight: 500,
        color: 'var(--black)'
      }
    }, opt.label));
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
/** Range slider — 8px track (slate-100), slate-900 range, 20px thumb with 2px border. */
function Slider({
  value,
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  onValueChange,
  disabled = false,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const v = value !== undefined ? value : inner;
  const ref = React.useRef(null);
  const pct = (v - min) / (max - min) * 100;
  const setFromX = clientX => {
    const r = ref.current.getBoundingClientRect();
    let n = min + Math.min(1, Math.max(0, (clientX - r.left) / r.width)) * (max - min);
    n = Math.round(n / step) * step;
    setInner(n);
    onValueChange && onValueChange(n);
  };
  const down = e => {
    if (disabled) return;
    setFromX(e.clientX);
    const move = ev => setFromX(ev.clientX);
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    role: "slider",
    "aria-valuenow": v,
    "aria-valuemin": min,
    "aria-valuemax": max,
    onPointerDown: down,
    style: {
      position: 'relative',
      height: 20,
      display: 'flex',
      alignItems: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      touchAction: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 8,
      borderRadius: 40,
      background: 'var(--slate-100)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      width: pct + '%',
      height: 8,
      borderRadius: 40,
      background: 'var(--primary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `calc(${pct}% - 10px)`,
      width: 20,
      height: 20,
      boxSizing: 'border-box',
      borderRadius: '50%',
      background: 'var(--white)',
      border: '2px solid var(--black)'
    }
  }));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Toggle switch with label — 44×24 track, 20px thumb. */
function Switch({
  id,
  label,
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled = false,
  style
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    const n = !on;
    setInner(n);
    onCheckedChange && onCheckedChange(n);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    id: id,
    type: "button",
    role: "switch",
    "aria-checked": on,
    disabled: disabled,
    onClick: toggle,
    style: {
      width: 44,
      height: 24,
      flex: 'none',
      padding: 2,
      border: 0,
      borderRadius: 9999,
      background: on ? 'var(--primary)' : 'var(--slate-200)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background-color 150ms',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--white)',
      boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
      transform: on ? 'translateX(20px)' : 'translateX(0)',
      transition: 'transform 150ms cubic-bezier(0.4,0,0.2,1)'
    }
  })), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    onClick: toggle,
    style: {
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 500,
      color: 'var(--black)',
      cursor: 'pointer'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text field — from the kit's "textarea" primitive. */
function Textarea({
  id,
  label,
  helper,
  placeholder,
  value,
  defaultValue,
  onChange,
  disabled = false,
  rows = 3,
  action,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: 14,
      lineHeight: '14px',
      fontWeight: 500,
      color: 'var(--foreground)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      boxSizing: 'border-box',
      width: '100%',
      minHeight: 80,
      padding: '8px 12px',
      resize: 'vertical',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--foreground)',
      background: 'var(--white)',
      border: '1px solid var(--input)',
      borderRadius: 6,
      outline: 'none',
      boxShadow: focus ? '0 0 0 2px var(--white), 0 0 0 4px var(--ring)' : 'none'
    }
  }, rest)), helper ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--muted-foreground)'
    }
  }, helper) : null, action);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LUCIDE = 'https://unpkg.com/lucide-static@0.263.1/icons/';

/** Lucide icon rendered as a CSS mask so it inherits currentColor. Names match the kit's icon/<name> symbols. */
function Icon({
  name,
  size = 16,
  color = 'currentColor',
  style,
  title,
  ...rest
}) {
  const url = `url(${LUCIDE}${name}.svg) center / contain no-repeat`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: title ? 'img' : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : true,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: 'none',
      backgroundColor: color,
      WebkitMask: url,
      mask: url,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  default: {
    bg: 'var(--primary)',
    fg: 'var(--primary-foreground)',
    border: 'transparent',
    hoverBg: 'var(--slate-800)'
  },
  destructive: {
    bg: 'var(--destructive)',
    fg: 'var(--destructive-foreground)',
    border: 'transparent',
    hoverBg: 'var(--red-600)'
  },
  outline: {
    bg: 'var(--white)',
    fg: 'var(--foreground)',
    border: 'var(--border)',
    hoverBg: 'var(--slate-100)'
  },
  subtle: {
    bg: 'var(--slate-100)',
    fg: 'var(--foreground)',
    border: 'transparent',
    hoverBg: 'var(--slate-200)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--foreground)',
    border: 'transparent',
    hoverBg: 'var(--slate-100)'
  },
  link: {
    bg: 'transparent',
    fg: 'var(--foreground)',
    border: 'transparent',
    hoverBg: 'transparent'
  }
};

/** Button — variants and metrics from the kit's "button" primitive. */
function Button({
  variant = 'default',
  size = 'default',
  icon,
  loading = false,
  disabled = false,
  fullWidth = false,
  children,
  style,
  onClick,
  type = 'button',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.default;
  const iconOnly = size === 'icon' || size === 'icon-circle';
  const dims = size === 'icon' ? {
    width: 32,
    height: 32,
    padding: 8
  } : size === 'icon-circle' ? {
    width: 40,
    height: 40,
    padding: 12,
    borderRadius: 96
  } : size === 'sm' ? {
    height: 36,
    padding: '8px 12px'
  } : {
    height: 40,
    padding: '8px 16px'
  };
  const inactive = disabled || loading;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: inactive,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: icon || loading ? 8 : 10,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: '24px',
      fontWeight: 500,
      whiteSpace: 'nowrap',
      color: v.fg,
      background: hover && !inactive ? v.hoverBg : v.bg,
      border: '1px solid ' + v.border,
      borderRadius: 6,
      textDecoration: variant === 'link' && hover ? 'underline' : 'none',
      textUnderlineOffset: 4,
      cursor: inactive ? 'default' : 'pointer',
      opacity: loading ? 0.5 : disabled ? 0.5 : 1,
      transition: 'background-color 150ms cubic-bezier(0.4,0,0.2,1)',
      outline: 'none',
      ...dims,
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader-2",
    style: {
      animation: 'ds-spin 1s linear infinite'
    }
  }) : icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon
  }) : null, !iconOnly && children, loading && /*#__PURE__*/React.createElement("style", null, '@keyframes ds-spin{to{transform:rotate(360deg)}}'));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Accordion.jsx
try { (() => {
/** Stacked disclosure rows — 1px slate-200 bottom rule, Medium 16/24 trigger, rotating chevron. */
function Accordion({
  items = [],
  type = 'single',
  defaultValue,
  width = 450,
  style
}) {
  const init = defaultValue === undefined ? [] : Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  const [open, setOpen] = React.useState(init);
  const toggle = v => setOpen(o => o.includes(v) ? o.filter(x => x !== v) : type === 'single' ? [v] : [...o, v]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      maxWidth: '100%',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, items.map(it => {
    const on = open.includes(it.value);
    return /*#__PURE__*/React.createElement("div", {
      key: it.value,
      style: {
        boxShadow: 'var(--shadow-divider-bottom)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-expanded": on,
      onClick: () => toggle(it.value),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 18,
        padding: '16px 0',
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 16,
        lineHeight: '24px',
        fontWeight: 500,
        color: 'var(--foreground)',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      style: {
        transform: on ? 'rotate(180deg)' : 'none',
        transition: 'transform 200ms'
      }
    })), on ? /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 16,
        fontSize: 14,
        lineHeight: '24px',
        color: 'var(--foreground)'
      }
    }, it.content) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Collapsible.jsx
try { (() => {
const rowStyle = {
  boxSizing: 'border-box',
  height: 36,
  display: 'flex',
  alignItems: 'center',
  padding: '8px 12px',
  border: '1px solid var(--input)',
  borderRadius: 6,
  fontSize: 14,
  lineHeight: '20px',
  color: 'var(--foreground)',
  background: 'var(--white)'
};

/** Header + toggle button; first row always visible, rest revealed — from the kit's "collapsible". */
function Collapsible({
  title,
  items = [],
  defaultOpen = false,
  width = 350,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [first, ...rest] = items;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 16px',
      height: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 600,
      color: 'var(--black)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "icon",
    variant: "ghost",
    icon: "chevrons-up-down",
    "aria-label": "Toggle",
    onClick: () => setOpen(!open)
  })), first !== undefined ? /*#__PURE__*/React.createElement("div", {
    style: rowStyle
  }, first) : null, open ? rest.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: rowStyle
  }, r)) : null);
}
Object.assign(__ds_scope, { Collapsible });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Collapsible.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Checkbox with label and optional description — from the kit's "checkbox" primitive. */
function Checkbox({
  id,
  label,
  description,
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled = false,
  style
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    const n = !on;
    setInner(n);
    onCheckedChange && onCheckedChange(n);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start',
      fontFamily: 'var(--font-sans)',
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    },
    onClick: toggle
  }, /*#__PURE__*/React.createElement("button", {
    id: id,
    type: "button",
    role: "checkbox",
    "aria-checked": on,
    disabled: disabled,
    style: {
      width: 14,
      height: 14,
      flex: 'none',
      padding: 0,
      margin: 0,
      boxSizing: 'border-box',
      display: 'grid',
      placeItems: 'center',
      borderRadius: 2,
      border: '1px solid ' + (on ? 'var(--primary)' : 'var(--gray-200)'),
      background: on ? 'var(--primary)' : 'var(--white)',
      color: 'var(--primary-foreground)',
      cursor: 'inherit'
    }
  }, on ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 10
  }) : null), label || description ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: 14,
      lineHeight: '14px',
      fontWeight: 500,
      color: 'var(--black)',
      cursor: 'inherit'
    }
  }, label) : null, description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--muted-foreground)'
    }
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/** Select trigger + options popover — from the kit's "select" / "select options". */
function Select({
  options = [],
  groups,
  value,
  defaultValue,
  onValueChange,
  placeholder = 'Select an option',
  width = 204,
  disabled = false,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(null);
  const cur = value !== undefined ? value : inner;
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);
  const norm = o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o;
  const gs = groups || [{
    options
  }];
  const all = gs.flatMap(g => g.options.map(norm));
  const sel = all.find(o => o.value === cur);
  const pick = o => {
    if (o.disabled) return;
    setInner(o.value);
    onValueChange && onValueChange(o.value);
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      width,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(!open),
    style: {
      width: '100%',
      height: 40,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 12px',
      background: 'var(--white)',
      border: '1px solid var(--input)',
      borderRadius: 6,
      fontFamily: 'inherit',
      fontSize: 14,
      lineHeight: '24px',
      fontWeight: 500,
      color: sel ? 'var(--foreground)' : 'var(--black)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, sel ? sel.label : placeholder), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down"
  })), open ? /*#__PURE__*/React.createElement("div", {
    role: "listbox",
    style: {
      position: 'absolute',
      top: 46,
      left: 0,
      width: '100%',
      zIndex: 50,
      background: 'var(--white)',
      border: '1px solid var(--slate-100)',
      borderRadius: 6,
      boxShadow: 'var(--shadow-popover)',
      overflow: 'hidden',
      maxHeight: 320,
      overflowY: 'auto'
    }
  }, gs.map((g, gi) => /*#__PURE__*/React.createElement("div", {
    key: gi,
    style: {
      borderTop: gi ? '1px solid var(--gray-200)' : 'none',
      padding: 5
    }
  }, g.label ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 8px 6px 32px',
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 600,
      color: 'var(--slate-700)'
    }
  }, g.label) : null, g.options.map(norm).map(o => /*#__PURE__*/React.createElement("div", {
    key: o.value,
    role: "option",
    "aria-selected": o.value === cur,
    onClick: () => pick(o),
    onMouseEnter: () => setHover(o.value),
    onMouseLeave: () => setHover(null),
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      padding: '6px 8px 6px 32px',
      borderRadius: 6,
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 500,
      color: 'var(--foreground)',
      background: hover === o.value && !o.disabled ? 'var(--accent)' : 'transparent',
      opacity: o.disabled ? 0.5 : 1,
      cursor: o.disabled ? 'default' : 'pointer'
    }
  }, o.value === cur ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    style: {
      position: 'absolute',
      left: 8
    }
  }) : null, o.label))))) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/menus/MenuItem.jsx
try { (() => {
/** One row of a menu — from the kit's "menu item" primitive (32px, padding 6/8, radius 6 hover). */
function MenuItem({
  type = 'item',
  label,
  icon,
  shortcut,
  disabled = false,
  checked = false,
  inset = false,
  submenu = false,
  active,
  onSelect,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const pad = inset || checked ? '6px 8px 6px 32px' : '6px 8px';
  if (type === 'separator') return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    style: {
      height: 1,
      background: 'var(--gray-200)',
      margin: '0 -5px'
    }
  });
  if (type === 'label') return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 600,
      color: 'var(--slate-700)',
      ...style
    }
  }, label);
  const on = active !== undefined ? active : hover;
  return /*#__PURE__*/React.createElement("div", {
    role: "menuitem",
    "aria-disabled": disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: () => {
      if (!disabled && onSelect) onSelect();
    },
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 32,
      boxSizing: 'border-box',
      padding: pad,
      borderRadius: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 500,
      color: disabled ? 'var(--slate-700)' : 'var(--foreground)',
      background: on && !disabled ? 'var(--accent)' : 'transparent',
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? 'default' : 'pointer',
      userSelect: 'none',
      ...style
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    style: {
      position: 'absolute',
      left: 8
    }
  }) : null, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, label), shortcut ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      lineHeight: '20px',
      fontWeight: 500,
      color: 'var(--menu-shortcut)',
      letterSpacing: 1
    }
  }, shortcut) : null, submenu ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right"
  }) : null);
}
Object.assign(__ds_scope, { MenuItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menus/MenuItem.jsx", error: String((e && e.message) || e) }); }

// components/menus/Command.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Command palette: search row, divider, grouped filterable items — from the kit's "command". */
function Command({
  groups = [],
  placeholder = 'Type a command or search...',
  width = 690,
  emptyText = 'No results found.',
  onSelect,
  style
}) {
  const [q, setQ] = React.useState('');
  const [active, setActive] = React.useState(0);
  const ql = q.trim().toLowerCase();
  const filtered = groups.map(g => ({
    ...g,
    items: g.items.filter(it => !ql || String(it.label).toLowerCase().includes(ql))
  })).filter(g => g.items.length);
  const flat = filtered.flatMap(g => g.items);
  const onKey = e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive(a => Math.min(flat.length - 1, a + 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive(a => Math.max(0, a - 1));
    }
    if (e.key === 'Enter' && flat[active]) {
      flat[active].onSelect && flat[active].onSelect();
      onSelect && onSelect(flat[active]);
    }
  };
  let idx = -1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      maxWidth: '100%',
      boxSizing: 'border-box',
      background: 'var(--white)',
      border: '1px solid var(--border)',
      borderRadius: 6,
      boxShadow: 'var(--shadow-popover)',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 40,
      padding: '0 16px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    color: "var(--slate-500)"
  }), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: q,
    onChange: e => {
      setQ(e.target.value);
      setActive(0);
    },
    onKeyDown: onKey,
    placeholder: placeholder,
    style: {
      flex: 1,
      border: 0,
      outline: 'none',
      fontFamily: 'inherit',
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 500,
      color: 'var(--foreground)',
      background: 'transparent'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 300,
      overflowY: 'auto'
    }
  }, filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      textAlign: 'center',
      fontSize: 14,
      color: 'var(--muted-foreground)',
      borderTop: '1px solid var(--gray-200)'
    }
  }, emptyText) : null, filtered.map((g, gi) => /*#__PURE__*/React.createElement("div", {
    key: gi,
    style: {
      padding: '6px 8px',
      borderTop: '1px solid var(--gray-200)'
    }
  }, g.heading ? /*#__PURE__*/React.createElement(__ds_scope.MenuItem, {
    type: "label",
    label: g.heading
  }) : null, g.items.map((it, j) => {
    idx++;
    const me = idx;
    return /*#__PURE__*/React.createElement(__ds_scope.MenuItem, _extends({
      key: j
    }, it, {
      active: active === me,
      onSelect: () => {
        it.onSelect && it.onSelect();
        onSelect && onSelect(it);
      },
      style: {
        cursor: 'pointer'
      }
    }));
  })))));
}
Object.assign(__ds_scope, { Command });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menus/Command.jsx", error: String((e && e.message) || e) }); }

// components/menus/Menu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Menu panel: white, 1px border, radius 6, 5px-padded sections split by full-bleed dividers. */
function Menu({
  items = [],
  width = 224,
  border = 'var(--input)',
  shadow = 'var(--shadow-dropdown)',
  onClose,
  style
}) {
  const sections = [[]];
  items.forEach(it => {
    if (it.type === 'separator') sections.push([]);else sections[sections.length - 1].push(it);
  });
  return /*#__PURE__*/React.createElement("div", {
    role: "menu",
    style: {
      width,
      boxSizing: 'border-box',
      background: 'var(--popover)',
      border: '1px solid ' + border,
      borderRadius: 6,
      boxShadow: shadow,
      overflow: 'hidden',
      ...style
    }
  }, sections.map((sec, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 5,
      borderTop: i ? '1px solid var(--gray-200)' : 'none'
    }
  }, sec.map((it, j) => /*#__PURE__*/React.createElement(__ds_scope.MenuItem, _extends({
    key: j
  }, it, {
    onSelect: () => {
      it.onSelect && it.onSelect();
      onClose && onClose();
    }
  }))))));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menus/Menu.jsx", error: String((e && e.message) || e) }); }

// components/menus/ContextMenu.jsx
try { (() => {
/** Right-click menu over a target area. */
function ContextMenu({
  children,
  items = [],
  width = 256,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const k = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', h);
    document.addEventListener('keydown', k);
    return () => {
      document.removeEventListener('mousedown', h);
      document.removeEventListener('keydown', k);
    };
  }, [open]);
  const [pos, setPos] = React.useState({
    x: 0,
    y: 0
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      ...style
    },
    onContextMenu: e => {
      e.preventDefault();
      const r = ref.current.getBoundingClientRect();
      setPos({
        x: e.clientX - r.left,
        y: e.clientY - r.top
      });
      setOpen(true);
    }
  }, children, open ? /*#__PURE__*/React.createElement(__ds_scope.Menu, {
    items: items,
    width: width,
    border: "var(--border)",
    shadow: "var(--shadow-popover)",
    onClose: () => setOpen(false),
    style: {
      position: 'absolute',
      left: pos.x,
      top: pos.y,
      zIndex: 50
    }
  }) : null);
}
Object.assign(__ds_scope, { ContextMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menus/ContextMenu.jsx", error: String((e && e.message) || e) }); }

// components/menus/DropdownMenu.jsx
try { (() => {
/** Click-triggered menu anchored under its trigger. */
function DropdownMenu({
  trigger,
  items = [],
  width = 224,
  align = 'start',
  defaultOpen = false,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const k = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', h);
    document.addEventListener('keydown', k);
    return () => {
      document.removeEventListener('mousedown', h);
      document.removeEventListener('keydown', k);
    };
  }, [open]);
  React.useEffect(() => {
    if (defaultOpen) setOpen(true);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      display: 'inline-block',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(!open),
    style: {
      display: 'inline-flex'
    }
  }, trigger), open ? /*#__PURE__*/React.createElement(__ds_scope.Menu, {
    items: items,
    width: width,
    onClose: () => setOpen(false),
    style: {
      position: 'absolute',
      top: 'calc(100% + 4px)',
      [align === 'end' ? 'right' : 'left']: 0,
      zIndex: 50
    }
  }) : null);
}
Object.assign(__ds_scope, { DropdownMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menus/DropdownMenu.jsx", error: String((e && e.message) || e) }); }

// components/menus/Menubar.jsx
try { (() => {
/** Desktop-style menubar — 40px bar, 1px slate-300 border, radius 6, triggers padded 6/12. */
function Menubar({
  menus = [],
  style
}) {
  const [open, setOpen] = React.useState(null);
  const [hover, setHover] = React.useState(null);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (open === null) return;
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(null);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    role: "menubar",
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      height: 40,
      boxSizing: 'border-box',
      padding: '4px 5px',
      background: 'var(--white)',
      border: '1px solid var(--input)',
      borderRadius: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, menus.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(open === i ? null : i),
    onMouseEnter: () => {
      setHover(i);
      if (open !== null) setOpen(i);
    },
    onMouseLeave: () => setHover(null),
    style: {
      padding: '6px 12px',
      borderRadius: 4,
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 500,
      color: 'var(--black)',
      background: open === i || hover === i ? 'var(--accent)' : 'transparent',
      cursor: 'pointer',
      userSelect: 'none'
    }
  }, m.label), open === i ? /*#__PURE__*/React.createElement(__ds_scope.Menu, {
    items: m.items,
    width: m.width || 192,
    border: "var(--border)",
    shadow: "var(--shadow-popover)",
    onClose: () => setOpen(null),
    style: {
      position: 'absolute',
      top: 'calc(100% + 9px)',
      left: -5,
      zIndex: 50
    }
  }) : null)));
}
Object.assign(__ds_scope, { Menubar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menus/Menubar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavigationMenu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavLink({
  title,
  description,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      padding: 12,
      borderRadius: 6,
      background: h ? 'var(--accent)' : 'transparent',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 500,
      color: 'var(--black)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      color: h ? 'var(--muted-foreground)' : 'var(--black)',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, description));
}

/** Site navigation with dropdown panels of link cards — from the kit's "navigation menu". */
function NavigationMenu({
  items = [],
  style
}) {
  const [open, setOpen] = React.useState(null);
  const [hover, setHover] = React.useState(null);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (open === null) return;
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(null);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);
  const cur = open !== null ? items[open] : null;
  return /*#__PURE__*/React.createElement("nav", {
    ref: ref,
    style: {
      position: 'relative',
      display: 'inline-flex',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, items.map((it, i) => {
    const dd = !!(it.links || it.content);
    const on = open === i || hover === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => dd ? setOpen(open === i ? null : i) : it.onClick && it.onClick(),
      onMouseEnter: () => setHover(i),
      onMouseLeave: () => setHover(null),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        padding: '8px 16px',
        borderRadius: 6,
        fontSize: 14,
        lineHeight: '20px',
        fontWeight: 500,
        color: 'var(--foreground)',
        background: on ? 'var(--accent)' : 'transparent',
        cursor: 'pointer',
        userSelect: 'none'
      }
    }, it.label, dd ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: open === i ? 'chevron-up' : 'chevron-down',
      size: 12
    }) : null);
  }), cur ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 8px)',
      left: 0,
      zIndex: 50,
      padding: 24,
      background: 'var(--white)',
      border: '1px solid var(--border)',
      borderRadius: 6,
      boxShadow: 'var(--shadow-popover)',
      display: 'flex',
      gap: 12
    }
  }, cur.content ? cur.content : null, cur.featured ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 188,
      minHeight: 270,
      flex: 'none',
      boxSizing: 'border-box',
      borderRadius: 5,
      background: 'var(--brand-gradient)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 20,
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'var(--white)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      lineHeight: '24px',
      fontWeight: 500
    }
  }, cur.featured.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '18px',
      letterSpacing: -0.6
    }
  }, cur.featured.description))) : null, cur.links ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: cur.featured ? '251px' : 'repeat(2, 251px)',
      gap: 12
    }
  }, cur.links.map((l, j) => /*#__PURE__*/React.createElement(NavLink, _extends({
    key: j
  }, l, {
    onClick: () => {
      l.onClick && l.onClick();
      setOpen(null);
    }
  })))) : null) : null);
}
Object.assign(__ds_scope, { NavigationMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavigationMenu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Segmented tab list (slate-100 track, white active trigger) with optional card-style panel. */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onValueChange,
  card = true,
  width = 400,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue !== undefined ? defaultValue : tabs[0] && tabs[0].value);
  const cur = value !== undefined ? value : inner;
  const active = tabs.find(t => t.value === cur);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width,
      maxWidth: '100%',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      alignSelf: 'flex-start',
      padding: 5,
      background: 'var(--muted)',
      borderRadius: 6
    }
  }, tabs.map(t => {
    const on = t.value === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": on,
      type: "button",
      disabled: t.disabled,
      onClick: () => {
        setInner(t.value);
        onValueChange && onValueChange(t.value);
      },
      style: {
        padding: '6px 12px',
        border: 0,
        borderRadius: 3,
        fontFamily: 'inherit',
        fontSize: 14,
        lineHeight: '20px',
        fontWeight: 500,
        color: on ? 'var(--foreground)' : 'var(--slate-700)',
        background: on ? 'var(--white)' : 'transparent',
        cursor: 'pointer',
        opacity: t.disabled ? 0.5 : 1,
        transition: 'background-color 150ms'
      }
    }, t.label);
  })), active && active.content ? /*#__PURE__*/React.createElement("div", {
    role: "tabpanel",
    style: card ? {
      boxSizing: 'border-box',
      padding: 25,
      background: 'var(--white)',
      border: '1px solid var(--border)',
      borderRadius: 6
    } : undefined
  }, active.content) : null);
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlays/AlertDialog.jsx
try { (() => {
/** Confirmation dialog — 512px, radius 6, title + description + Cancel / Continue. */
function AlertDialog({
  open = false,
  onOpenChange,
  title = 'Are you sure absolutely sure?',
  description,
  cancelLabel = 'Cancel',
  actionLabel = 'Continue',
  destructive = false,
  onAction,
  inline = false,
  style
}) {
  const close = () => onOpenChange && onOpenChange(false);
  if (!open && !inline) return null;
  const panel = /*#__PURE__*/React.createElement("div", {
    role: "alertdialog",
    "aria-modal": !inline,
    style: {
      width: 512,
      maxWidth: 'calc(100vw - 32px)',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: 24,
      background: 'var(--white)',
      border: '1px solid var(--input)',
      borderRadius: 6,
      fontFamily: 'var(--font-sans)',
      ...(inline ? style : null)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      lineHeight: '28px',
      fontWeight: 600,
      color: 'var(--foreground)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--muted-foreground)'
    }
  }, description) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    onClick: close
  }, cancelLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: destructive ? 'destructive' : 'default',
    onClick: () => {
      onAction && onAction();
      close();
    }
  }, actionLabel)));
  if (inline) return panel;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'grid',
      placeItems: 'center',
      background: 'rgba(0,0,0,0.5)',
      backdropFilter: 'blur(2px)',
      ...style
    }
  }, panel);
}
Object.assign(__ds_scope, { AlertDialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/AlertDialog.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Dialog.jsx
try { (() => {
/** Modal dialog — white panel, 1px slate-300, radius 8, 24px padding; 32px between header, body, footer. */
function Dialog({
  open = false,
  onOpenChange,
  title,
  description,
  children,
  footer,
  width = 425,
  inline = false,
  style
}) {
  const close = () => onOpenChange && onOpenChange(false);
  React.useEffect(() => {
    if (!open) return;
    const k = e => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  }, [open]);
  if (!open && !inline) return null;
  const panel = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": !inline,
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: 'calc(100vw - 32px)',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      padding: 24,
      background: 'var(--white)',
      border: '1px solid var(--input)',
      borderRadius: 8,
      fontFamily: 'var(--font-sans)',
      ...(inline ? style : null)
    }
  }, title || description ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      lineHeight: '28px',
      fontWeight: 600,
      color: 'var(--foreground)'
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--muted-foreground)'
    }
  }, description) : null) : null, children, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8
    }
  }, footer) : null);
  if (inline) return panel;
  return /*#__PURE__*/React.createElement("div", {
    onClick: close,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'grid',
      placeItems: 'center',
      background: 'rgba(0,0,0,0.5)',
      backdropFilter: 'blur(2px)',
      ...style
    }
  }, panel);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlays/HoverCard.jsx
try { (() => {
/** Hover-triggered preview card — 320px, 1px gray-200, radius 6, 17px padding, soft grey shadow. */
function HoverCard({
  trigger,
  children,
  width = 320,
  openDelay = 300,
  defaultOpen = false,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const t = React.useRef(null);
  const enter = () => {
    clearTimeout(t.current);
    t.current = setTimeout(() => setOpen(true), openDelay);
  };
  const leave = () => {
    clearTimeout(t.current);
    t.current = setTimeout(() => setOpen(false), 150);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-block'
    },
    onMouseEnter: enter,
    onMouseLeave: leave
  }, trigger, open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 4px)',
      left: 0,
      zIndex: 50,
      width,
      boxSizing: 'border-box',
      display: 'flex',
      gap: 16,
      padding: 17,
      background: 'var(--white)',
      border: '1px solid var(--gray-200)',
      borderRadius: 6,
      boxShadow: 'var(--shadow-hovercard)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, children) : null);
}
Object.assign(__ds_scope, { HoverCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/HoverCard.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Popover.jsx
try { (() => {
/** Click-triggered floating panel — 320px, 1px slate-200, radius 6, 17px padding, popover shadow. */
function Popover({
  trigger,
  children,
  width = 320,
  align = 'start',
  defaultOpen = false,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(!open),
    style: {
      display: 'inline-flex'
    }
  }, trigger), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 4px)',
      [align === 'end' ? 'right' : 'left']: 0,
      zIndex: 50,
      width,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: 17,
      background: 'var(--popover)',
      border: '1px solid var(--border)',
      borderRadius: 6,
      boxShadow: 'var(--shadow-popover)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, children) : null);
}
Object.assign(__ds_scope, { Popover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Popover.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Tooltip.jsx
try { (() => {
/** Small label shown on hover/focus — white, radius 6, padding 7/13, Medium 14/14. */
function Tooltip({
  content,
  children,
  side = 'top',
  defaultOpen = false,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const pos = side === 'bottom' ? {
    top: 'calc(100% + 6px)'
  } : {
    bottom: 'calc(100% + 6px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(defaultOpen),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(defaultOpen)
  }, children, open ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      zIndex: 60,
      whiteSpace: 'nowrap',
      padding: '7px 13px',
      background: 'var(--white)',
      borderRadius: 6,
      boxShadow: 'var(--shadow-tooltip)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: '14px',
      fontWeight: 500,
      color: 'var(--black)',
      pointerEvents: 'none',
      ...style
    }
  }, content) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/App.jsx
try { (() => {
const COMPONENTS = [['accordion', 'Accordion', 'A vertically stacked set of interactive headings that each reveal an associated section of content.'], ['alert-dialog', 'Alert Dialog', 'A modal dialog that interrupts the user with important content and expects a response.'], ['aspect-ratio', 'Aspect Ratio', 'Displays content within a desired ratio.'], ['avatar', 'Avatar', 'An image element with a fallback for representing the user.'], ['button', 'Button', 'Displays a button or a component that looks like a button.'], ['checkbox', 'Checkbox', 'A control that allows the user to toggle between checked and not checked.'], ['collapsible', 'Collapsible', 'An interactive component which expands/collapses a panel.'], ['command', 'Command', 'Fast, composable, unstyled command menu for React.'], ['context-menu', 'Context Menu', 'Displays a menu to the user — such as a set of actions or functions — triggered by a button.'], ['dialog', 'Dialog', 'A modal dialog that interrupts the user with important content and expects a response.'], ['dropdown-menu', 'Dropdown Menu', 'Displays a menu to the user — such as a set of actions or functions — triggered by a button.'], ['hover-card', 'Hover Card', 'For sighted users to preview content available behind a link.'], ['input', 'Input', 'Displays a form input field or a component that looks like an input field.'], ['label', 'Label', 'Renders an accessible label associated with controls.'], ['menubar', 'Menubar', 'A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.'], ['navigation-menu', 'Navigation Menu', 'A collection of links for navigating websites.'], ['popover', 'Popover', 'Displays rich content in a portal, triggered by a button.'], ['progress', 'Progress', 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'], ['radio-group', 'Radio Group', 'A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.'], ['scroll-area', 'Scroll Area', 'Visually or semantically separates content.'], ['select', 'Select', 'Displays a list of options for the user to pick from—triggered by a button.'], ['separator', 'Separator', 'Visually or semantically separates content.'], ['slider', 'Slider', 'An input where the user selects a value from within a given range'], ['switch', 'Switch', 'A control that allows the user to toggle between checked and not checked.'], ['tabs', 'Tabs', 'A set of layered sections of content—known as tab panels—that are displayed one at a time.'], ['textarea', 'Textarea', 'Displays a form textarea or a component that looks like a textarea.'], ['tooltip', 'Tooltip', 'A popup that displays information related to an element when receives keyboard focus or the mouse hovers over it.']];
const SECTIONS = [{
  title: 'Getting Started',
  items: [{
    id: 'cover',
    label: 'Introduction'
  }, {
    id: 'typography',
    label: 'Typography'
  }, {
    id: 'colors',
    label: 'Colors'
  }]
}, {
  title: 'Components',
  items: COMPONENTS.map(([id, label]) => ({
    id,
    label
  }))
}];
function App() {
  const {
    Command
  } = window.ShadcnUiDesignSystem_3aaf87;
  const [page, setPage] = React.useState(() => localStorage.getItem('shadcn-kit-page') || 'cover');
  const [search, setSearch] = React.useState(false);
  const go = id => {
    setPage(id);
    localStorage.setItem('shadcn-kit-page', id);
    setSearch(false);
    window.scrollTo(0, 0);
  };
  React.useEffect(() => {
    const k = e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearch(s => !s);
      }
      if (e.key === 'Escape') setSearch(false);
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, []);
  const comp = COMPONENTS.find(c => c[0] === page);
  let body;
  if (page === 'cover') body = /*#__PURE__*/React.createElement(CoverScreen, {
    onNavigate: go
  });else if (page === 'typography') body = /*#__PURE__*/React.createElement(TypographyScreen, null);else if (page === 'colors') body = /*#__PURE__*/React.createElement(ColorsScreen, null);else if (comp) body = /*#__PURE__*/React.createElement(DocPage, {
    title: comp[1],
    description: comp[2]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    }
  }, getDemo(comp[0])));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    onHome: () => go('cover'),
    onNavigate: go,
    onSearch: () => setSearch(true)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    sections: SECTIONS,
    current: page,
    onSelect: go
  }), /*#__PURE__*/React.createElement("main", {
    "data-screen-label": page,
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      justifyContent: 'center',
      borderLeft: '1px solid var(--slate-200)'
    }
  }, body)), search ? /*#__PURE__*/React.createElement("div", {
    onClick: () => setSearch(false),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(0,0,0,0.5)',
      backdropFilter: 'blur(2px)',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '15vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      height: 'fit-content'
    }
  }, /*#__PURE__*/React.createElement(Command, {
    width: 560,
    placeholder: "Type a command or search...",
    groups: SECTIONS.map(s => ({
      heading: s.title,
      items: s.items.map(it => ({
        icon: s.title === 'Components' ? 'component' : 'file-text',
        label: it.label,
        onSelect: () => go(it.id)
      }))
    }))
  }))) : null);
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/CoverScreen.jsx
try { (() => {
// Recreation of the kit's "Cover" frame (1152×700).
function CoverScreen({
  onNavigate
}) {
  const {
    RadioGroup,
    Popover,
    Input,
    Switch,
    Button,
    Tabs,
    Menu,
    Tooltip,
    Label,
    Avatar,
    Icon
  } = window.ShadcnUiDesignSystem_3aaf87;
  const dims = [['Width', '100%'], ['Max. width', '300px'], ['Height', '25px'], ['Max. height', 'none']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1152,
      maxWidth: '100%',
      boxSizing: 'border-box',
      background: '#fff',
      padding: '23px 88px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      background: 'var(--slate-900)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      lineHeight: '28px',
      fontWeight: 800,
      letterSpacing: -0.6
    }
  }, "shadcn/ui")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      lineHeight: '60px',
      fontWeight: 800,
      letterSpacing: -1.2,
      maxWidth: 976
    }
  }, "Beautifully designed components", /*#__PURE__*/React.createElement("br", null), "built with RadixUI and Tailwind CSS")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320,
      display: 'flex',
      flexDirection: 'column',
      gap: 44
    }
  }, /*#__PURE__*/React.createElement(RadioGroup, {
    defaultValue: "comfortable",
    options: [{
      value: 'default',
      label: 'Default'
    }, {
      value: 'comfortable',
      label: 'Comfortable'
    }, {
      value: 'compact',
      label: 'Compact'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: 17,
      border: '1px solid var(--slate-200)',
      borderRadius: 6,
      boxShadow: 'var(--shadow-popover)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: '16px',
      fontWeight: 500
    }
  }, "Dimensions"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '20px'
    }
  }, "Set the dimensions for the layer.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, dims.map(([l, v]) => /*#__PURE__*/React.createElement(Input, {
    key: l,
    size: "sm",
    labelPosition: "left",
    label: l,
    defaultValue: v
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 53
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 37
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Airplane mode",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate('button')
  }, "Continue")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320,
      boxSizing: 'border-box',
      display: 'flex',
      gap: 16,
      padding: 17,
      border: '1px solid var(--gray-200)',
      borderRadius: 6,
      boxShadow: 'var(--shadow-hovercard)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    fallback: "N",
    style: {
      background: 'var(--black)',
      color: '#fff'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 600
    }
  }, "@nextjs"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '20px'
    }
  }, "The React Framework - created and maintained by @vercel"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12,
      lineHeight: '16px',
      color: 'var(--slate-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    color: "var(--slate-500)"
  }), "Joined December 2021"))), /*#__PURE__*/React.createElement(Tabs, {
    card: false,
    width: "auto",
    tabs: [{
      value: 'account',
      label: 'Account'
    }, {
      value: 'password',
      label: 'Password'
    }]
  })), /*#__PURE__*/React.createElement(Menu, {
    items: window.ACCOUNT_MENU
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 20,
      lineHeight: '28px',
      fontWeight: 800,
      letterSpacing: -0.5
    }
  }, "This figma file was made with love by @skirano"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '7px 13px',
      borderRadius: 6,
      boxShadow: 'var(--shadow-tooltip)',
      fontSize: 14,
      lineHeight: '14px',
      fontWeight: 500
    }
  }, "Beta"), /*#__PURE__*/React.createElement(Label, null, "v1.0.0"))));
}
window.CoverScreen = CoverScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/CoverScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/Demos.jsx
try { (() => {
// One live demo per frame on the kit's "Components" canvas, with the kit's own copy.
window.ACCOUNT_MENU = [{
  type: 'label',
  label: 'My Account'
}, {
  type: 'separator'
}, {
  icon: 'user',
  label: 'Profile',
  shortcut: '⇧⌘P'
}, {
  icon: 'credit-card',
  label: 'Billing',
  shortcut: '⌘B'
}, {
  icon: 'settings',
  label: 'Settings',
  shortcut: '⌘S'
}, {
  icon: 'keyboard',
  label: 'Keyboard shortcuts',
  shortcut: '⌘K'
}, {
  type: 'separator'
}, {
  icon: 'users',
  label: 'Team'
}, {
  icon: 'user-plus',
  label: 'Invite users',
  submenu: true
}, {
  icon: 'plus',
  label: 'New Team',
  shortcut: '⌘+T'
}, {
  type: 'separator'
}, {
  icon: 'github',
  label: 'Github'
}, {
  icon: 'life-buoy',
  label: 'Support'
}, {
  icon: 'cloud',
  label: 'API',
  disabled: true
}, {
  type: 'separator'
}, {
  icon: 'log-out',
  label: 'Log out',
  shortcut: '⇧⌘Q'
}];
function DialogDemo() {
  const {
    Dialog,
    Button,
    Input
  } = window.ShadcnUiDesignSystem_3aaf87;
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setOpen(true)
  }, "Edit Profile"), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onOpenChange: setOpen,
    title: "Edit profile",
    description: "Make changes to your profile here. Click save when you're done.",
    footer: /*#__PURE__*/React.createElement(Button, {
      onClick: () => setOpen(false)
    }, "Save changes")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    labelPosition: "left",
    label: "Name",
    defaultValue: "Pedro Duarte"
  }), /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    labelPosition: "left",
    label: "Username",
    defaultValue: "@peduarte"
  }))));
}
function AlertDemo() {
  const {
    AlertDialog,
    Button
  } = window.ShadcnUiDesignSystem_3aaf87;
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setOpen(true)
  }, "Show Dialog"), /*#__PURE__*/React.createElement(AlertDialog, {
    open: open,
    onOpenChange: setOpen,
    description: "This action cannot be undone. This will permanently delete your account and remove your data from our servers."
  }));
}
function ProgressDemo() {
  const {
    Progress
  } = window.ShadcnUiDesignSystem_3aaf87;
  const [v, setV] = React.useState(13);
  React.useEffect(() => {
    const t = setTimeout(() => setV(66), 500);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 414
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    value: v
  }));
}
function getDemo(id) {
  const D = window.ShadcnUiDesignSystem_3aaf87;
  const {
    Accordion,
    Avatar,
    Button,
    Checkbox,
    ContextMenu,
    DropdownMenu,
    HoverCard,
    Input,
    Label,
    Menubar,
    NavigationMenu,
    Popover,
    RadioGroup,
    ScrollArea,
    Select,
    Separator,
    Slider,
    Switch,
    Tabs,
    Textarea,
    Tooltip,
    AspectRatio,
    Collapsible,
    Command,
    Icon
  } = D;
  const dims = [['Width', '100%'], ['Max. width', '300px'], ['Height', '25px'], ['Max. height', 'none']];
  switch (id) {
    case 'accordion':
      return /*#__PURE__*/React.createElement(Accordion, {
        width: 450,
        defaultValue: "a3",
        items: [{
          value: 'a1',
          title: 'Is it accessible?',
          content: 'Yes. It adheres to the WAI-ARIA design pattern.'
        }, {
          value: 'a2',
          title: 'Is it styled?',
          content: 'Yes. It comes with default styles that matches the other components aesthetic.'
        }, {
          value: 'a3',
          title: 'Is it animated?',
          content: "Yes. It's animated by default, but you can disable it if you prefer."
        }]
      });
    case 'alert-dialog':
      return /*#__PURE__*/React.createElement(AlertDemo, null);
    case 'aspect-ratio':
      return /*#__PURE__*/React.createElement("div", {
        style: {
          width: 690
        }
      }, /*#__PURE__*/React.createElement(AspectRatio, {
        ratio: 690 / 388,
        src: "../../assets/images/aspect-ratio-photo.png",
        alt: "Photo"
      }));
    case 'avatar':
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 16
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        src: "../../assets/images/avatar.jpg",
        alt: "@shadcn",
        fallback: "CN"
      }), /*#__PURE__*/React.createElement(Avatar, {
        fallback: "CN"
      }));
    case 'button':
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap',
          justifyContent: 'center'
        }
      }, /*#__PURE__*/React.createElement(Button, null, "Button"), /*#__PURE__*/React.createElement(Button, {
        variant: "destructive"
      }, "Destructive"), /*#__PURE__*/React.createElement(Button, {
        variant: "outline"
      }, "Outline"), /*#__PURE__*/React.createElement(Button, {
        variant: "subtle"
      }, "Subtle"), /*#__PURE__*/React.createElement(Button, {
        variant: "ghost"
      }, "Ghost"), /*#__PURE__*/React.createElement(Button, {
        variant: "link"
      }, "Link"), /*#__PURE__*/React.createElement(Button, {
        icon: "mail"
      }, "Login with Email"), /*#__PURE__*/React.createElement(Button, {
        loading: true
      }, "Please wait"));
    case 'checkbox':
      return /*#__PURE__*/React.createElement(Checkbox, {
        label: "Accept terms and conditions"
      });
    case 'collapsible':
      return /*#__PURE__*/React.createElement(Collapsible, {
        title: "@peduarte starred 3 repositories",
        items: ['@radix-ui/primitives', '@radix-ui/colors', '@stitches/react']
      });
    case 'command':
      return /*#__PURE__*/React.createElement(Command, {
        groups: [{
          heading: 'Suggestions',
          items: [{
            icon: 'calendar',
            label: 'Calendar'
          }, {
            icon: 'smile',
            label: 'Search Emoji'
          }, {
            icon: 'calculator',
            label: 'Calculator'
          }]
        }, {
          heading: 'Settings',
          items: [{
            icon: 'user',
            label: 'Profile',
            shortcut: '⌘P'
          }, {
            icon: 'credit-card',
            label: 'Billing',
            shortcut: '⌘B'
          }, {
            icon: 'settings',
            label: 'Settings',
            shortcut: '⌘S'
          }]
        }]
      });
    case 'context-menu':
      return /*#__PURE__*/React.createElement(ContextMenu, {
        items: [{
          label: 'Back',
          shortcut: '⌘[',
          inset: true
        }, {
          label: 'Forward',
          shortcut: '⌘]',
          inset: true,
          disabled: true
        }, {
          label: 'Reload',
          shortcut: '⌘R',
          inset: true
        }, {
          label: 'More Tools',
          inset: true,
          submenu: true
        }, {
          type: 'separator'
        }, {
          label: 'Show Bookmark Bar',
          checked: true,
          shortcut: '⌘⇧B'
        }, {
          label: 'Show Full URLs',
          inset: true
        }, {
          type: 'separator'
        }, {
          type: 'label',
          label: 'People',
          inset: true
        }, {
          type: 'separator'
        }, {
          label: 'Pedro Duarte',
          checked: true
        }, {
          label: 'Colm Tuite',
          inset: true
        }, {
          label: 'Pietro Schirano',
          inset: true
        }]
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 300,
          height: 150,
          display: 'grid',
          placeItems: 'center',
          border: '1px dashed var(--slate-300)',
          borderRadius: 6,
          fontSize: 14,
          color: 'var(--slate-500)'
        }
      }, "Right click here"));
    case 'dialog':
      return /*#__PURE__*/React.createElement(DialogDemo, null);
    case 'dropdown-menu':
      return /*#__PURE__*/React.createElement(DropdownMenu, {
        defaultOpen: true,
        trigger: /*#__PURE__*/React.createElement(Button, {
          variant: "outline"
        }, "Open"),
        items: window.ACCOUNT_MENU
      });
    case 'hover-card':
      return /*#__PURE__*/React.createElement(HoverCard, {
        trigger: /*#__PURE__*/React.createElement(Button, {
          variant: "link"
        }, "@nextjs")
      }, /*#__PURE__*/React.createElement(Avatar, {
        fallback: "N",
        style: {
          background: 'var(--black)',
          color: '#fff'
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          lineHeight: '20px',
          fontWeight: 600,
          color: 'var(--slate-900)'
        }
      }, "@nextjs"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          lineHeight: '20px',
          color: 'var(--slate-900)'
        }
      }, "The React Framework - created and maintained by @vercel"), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          fontSize: 12,
          lineHeight: '16px',
          color: 'var(--slate-500)'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "calendar",
        color: "var(--slate-500)"
      }), "Joined December 2021")));
    case 'input':
      return /*#__PURE__*/React.createElement("div", {
        style: {
          width: 384
        }
      }, /*#__PURE__*/React.createElement(Input, {
        id: "email",
        label: "Email",
        placeholder: "Email",
        helper: "Enter your email address",
        trailing: /*#__PURE__*/React.createElement(Button, null, "Subscribe")
      }));
    case 'label':
      return /*#__PURE__*/React.createElement(Checkbox, {
        label: "Accept terms and condition"
      });
    case 'menubar':
      return /*#__PURE__*/React.createElement(Menubar, {
        menus: [{
          label: 'File',
          items: [{
            label: 'New Tab',
            shortcut: '⌘T'
          }, {
            label: 'New Window',
            shortcut: '⌘N'
          }, {
            label: 'New Incognito Window',
            disabled: true
          }, {
            type: 'separator'
          }, {
            label: 'Print...',
            shortcut: '⌘P'
          }]
        }, {
          label: 'Edit',
          items: [{
            label: 'Undo',
            shortcut: '⌘Z'
          }, {
            label: 'Redo',
            shortcut: '⇧⌘Z'
          }, {
            type: 'separator'
          }, {
            label: 'Cut'
          }, {
            label: 'Copy'
          }, {
            label: 'Paste'
          }]
        }, {
          label: 'View',
          items: [{
            label: 'Always Show Bookmarks Bar',
            inset: true
          }, {
            label: 'Always Show Full URLs',
            checked: true
          }, {
            type: 'separator'
          }, {
            label: 'Reload',
            shortcut: '⌘R',
            inset: true
          }]
        }, {
          label: 'Profile',
          items: [{
            label: 'Andy',
            inset: true
          }, {
            label: 'Benoit',
            checked: true
          }, {
            label: 'Luis',
            inset: true
          }]
        }]
      });
    case 'navigation-menu':
      return /*#__PURE__*/React.createElement("div", {
        style: {
          minHeight: 362
        }
      }, /*#__PURE__*/React.createElement(NavigationMenu, {
        items: [{
          label: 'Getting started',
          featured: {
            title: 'shadcn/ui',
            description: 'Beautifully designed components built with Radix UI and Tailwind CSS.'
          },
          links: [{
            title: 'Introduction',
            description: 'Re-usable components built using Radix UI and Tailwind CSS'
          }, {
            title: 'Installation',
            description: 'How to install dependencies and structure your app.'
          }, {
            title: 'Typography',
            description: 'Styles for headings, paragraphs, lists...etc'
          }]
        }, {
          label: 'Components',
          links: [{
            title: 'Alert Dialog',
            description: 'A modal dialog that interrupts the user with important content and expects a response.'
          }, {
            title: 'Hover Card',
            description: 'For sighted users to preview content available behind a link.'
          }, {
            title: 'Progress',
            description: 'Displays an indicator showing the completion progress of a task.'
          }, {
            title: 'Scroll-area',
            description: 'Visually or semantically separates content.'
          }, {
            title: 'Tabs',
            description: 'A set of layered sections of content.'
          }, {
            title: 'Tooltip',
            description: 'A popup that displays information related to an element.'
          }]
        }, {
          label: 'Documentation'
        }]
      }));
    case 'popover':
      return /*#__PURE__*/React.createElement(Popover, {
        defaultOpen: true,
        trigger: /*#__PURE__*/React.createElement(Button, {
          variant: "outline"
        }, "Open popover")
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 16,
          lineHeight: '16px',
          fontWeight: 500
        }
      }, "Dimensions"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          lineHeight: '20px'
        }
      }, "Set the dimensions for the layer.")), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 9
        }
      }, dims.map(([l, v]) => /*#__PURE__*/React.createElement(Input, {
        key: l,
        size: "sm",
        labelPosition: "left",
        label: l,
        defaultValue: v
      }))));
    case 'progress':
      return /*#__PURE__*/React.createElement(ProgressDemo, null);
    case 'radio-group':
      return /*#__PURE__*/React.createElement(RadioGroup, {
        defaultValue: "comfortable",
        options: [{
          value: 'default',
          label: 'Default'
        }, {
          value: 'comfortable',
          label: 'Comfortable'
        }, {
          value: 'compact',
          label: 'Compact'
        }]
      });
    case 'scroll-area':
      return /*#__PURE__*/React.createElement(ScrollArea, {
        title: "Tags"
      }, Array.from({
        length: 50
      }, (_, i) => /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          padding: '8px 0',
          fontSize: 14,
          lineHeight: '20px',
          borderBottom: '1px solid var(--slate-200)'
        }
      }, "v1.2.0-beta.", 50 - i)));
    case 'select':
      return /*#__PURE__*/React.createElement(Select, {
        placeholder: "Select a fruit",
        groups: [{
          label: 'Fruits',
          options: ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple']
        }, {
          label: 'Vegetables',
          options: ['Aubergine', 'Broccoli', {
            value: 'Carrot',
            label: 'Carrot',
            disabled: true
          }, 'Leek']
        }, {
          label: 'Meat',
          options: ['Beef', 'Chicken', 'Lamb']
        }]
      });
    case 'separator':
      return /*#__PURE__*/React.createElement("div", {
        style: {
          width: 252
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          lineHeight: '14px',
          fontWeight: 500
        }
      }, "Radix Primitives"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          lineHeight: '20px',
          marginTop: 4
        }
      }, "An open-source UI component library."), /*#__PURE__*/React.createElement(Separator, {
        color: "var(--black)",
        style: {
          margin: '16px 0'
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 16,
          alignItems: 'center',
          fontSize: 14,
          lineHeight: '20px'
        }
      }, "Blog", /*#__PURE__*/React.createElement(Separator, {
        orientation: "vertical"
      }), "Docs", /*#__PURE__*/React.createElement(Separator, {
        orientation: "vertical"
      }), "Source"));
    case 'slider':
      return /*#__PURE__*/React.createElement("div", {
        style: {
          width: 414
        }
      }, /*#__PURE__*/React.createElement(Slider, {
        defaultValue: 50
      }));
    case 'switch':
      return /*#__PURE__*/React.createElement(Switch, {
        label: "Airplane mode"
      });
    case 'tabs':
      return /*#__PURE__*/React.createElement(Tabs, {
        tabs: [{
          value: 'account',
          label: 'Account',
          content: /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              fontSize: 14,
              lineHeight: '20px'
            }
          }, "Make changes to your account here. Click save when you're done."), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 8
            }
          }, /*#__PURE__*/React.createElement(Input, {
            size: "sm",
            id: "tn",
            label: "Name",
            defaultValue: "Pietro Schirano"
          }), /*#__PURE__*/React.createElement(Input, {
            size: "sm",
            id: "tu",
            label: "Username",
            defaultValue: "@skirano"
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, null, "Save changes")))
        }, {
          value: 'password',
          label: 'Password',
          content: /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              fontSize: 14,
              lineHeight: '20px'
            }
          }, "Change your password here. After saving, you'll be logged out."), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 8
            }
          }, /*#__PURE__*/React.createElement(Input, {
            size: "sm",
            id: "pc",
            type: "password",
            label: "Current password"
          }), /*#__PURE__*/React.createElement(Input, {
            size: "sm",
            id: "pn",
            type: "password",
            label: "New password"
          })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, null, "Save password")))
        }]
      });
    case 'textarea':
      return /*#__PURE__*/React.createElement("div", {
        style: {
          width: 530
        }
      }, /*#__PURE__*/React.createElement(Textarea, {
        label: "Your message",
        placeholder: "Type your message here",
        helper: "Your message will be copied to the support team."
      }));
    case 'tooltip':
      return /*#__PURE__*/React.createElement(Tooltip, {
        content: "Add to library"
      }, /*#__PURE__*/React.createElement(Button, {
        size: "icon",
        variant: "outline",
        icon: "plus",
        "aria-label": "Add to library"
      }));
    default:
      return null;
  }
}
window.getDemo = getDemo;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/Demos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/DocPage.jsx
try { (() => {
// Page shell copied from every frame on the kit's "Components" canvas:
// 792 wide · padding 32/32/64/32 · gap 64 · header (title 30/36 600 -0.75, lead 20/28 slate-600, "View docs" button) + 1px slate-200 rule.
function DocPage({
  title,
  description,
  children,
  onViewDocs
}) {
  const {
    Button
  } = window.ShadcnUiDesignSystem_3aaf87;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 792,
      maxWidth: '100%',
      boxSizing: 'border-box',
      background: '#fff',
      padding: '32px 32px 64px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 45,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      lineHeight: '36px',
      fontWeight: 600,
      letterSpacing: -0.75,
      color: 'var(--slate-900)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      lineHeight: '28px',
      color: 'var(--slate-600)',
      textWrap: 'pretty'
    }
  }, description)), /*#__PURE__*/React.createElement(Button, {
    onClick: onViewDocs
  }, "View docs")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--slate-200)'
    }
  })), children);
}
window.DocPage = DocPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/DocPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/FoundationScreens.jsx
try { (() => {
// Typography & Colors frames from the kit's Typography / Colors canvases.
function Specimen({
  label,
  children,
  last
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      lineHeight: '36px',
      fontWeight: 600,
      letterSpacing: -0.75
    }
  }, label), children), last ? null : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: 1,
      background: 'var(--slate-200)'
    }
  }));
}
function TypographyScreen() {
  const {
    Table,
    InlineCode
  } = window.ShadcnUiDesignSystem_3aaf87;
  return /*#__PURE__*/React.createElement(DocPage, {
    title: "Typography",
    description: "Styles for headings, paragraphs, lists...etc"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement(Specimen, {
    label: "h1"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      lineHeight: '48px',
      fontWeight: 800,
      letterSpacing: -1.2,
      maxWidth: 716
    }
  }, "Taxing Laughter: The Joke Tax Chronicles")), /*#__PURE__*/React.createElement(Specimen, {
    label: "h2"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      lineHeight: '36px',
      fontWeight: 600,
      letterSpacing: -0.75
    }
  }, "The People of the Kingdom")), /*#__PURE__*/React.createElement(Specimen, {
    label: "h3"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      lineHeight: '32px',
      fontWeight: 600,
      letterSpacing: -0.6
    }
  }, "The Joke Tax")), /*#__PURE__*/React.createElement(Specimen, {
    label: "h4"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      lineHeight: '28px',
      fontWeight: 600,
      letterSpacing: -0.5
    }
  }, "People stopped telling jokes")), /*#__PURE__*/React.createElement(Specimen, {
    label: "p"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: '28px',
      maxWidth: 686
    }
  }, "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.")), /*#__PURE__*/React.createElement(Specimen, {
    label: "blockquote"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: '24px',
      fontStyle: 'italic',
      borderLeft: '2px solid #e3e3e3',
      paddingLeft: 24,
      maxWidth: 656
    }
  }, "\"After all,\" he said, \"everyone enjoys a good joke, so it's only fair that they should pay for the privilege.\"")), /*#__PURE__*/React.createElement(Specimen, {
    label: "table"
  }, /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: 'a',
      header: 'King’s Treasury',
      width: 315
    }, {
      key: 'b',
      header: 'People’s happiness',
      width: 374
    }],
    rows: [{
      a: 'Empty',
      b: 'Overflowing'
    }, {
      a: 'Modest',
      b: 'Satisfied'
    }, {
      a: 'Full',
      b: 'Ecstatic'
    }]
  })), /*#__PURE__*/React.createElement(Specimen, {
    label: "list"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("li", null, "1st level of puns: 5 gold coins"), /*#__PURE__*/React.createElement("li", null, "2nd level of jokes: 10 gold coins"), /*#__PURE__*/React.createElement("li", null, "3rd level of one-liners : 20 gold coins"))), /*#__PURE__*/React.createElement(Specimen, {
    label: "inline code"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InlineCode, null, "@radix-ui/react-alert-dialog"))), /*#__PURE__*/React.createElement(Specimen, {
    label: "lead"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      lineHeight: '28px',
      maxWidth: 666
    }
  }, "A modal dialog that interrupts the user with important content and expects a response.")), /*#__PURE__*/React.createElement(Specimen, {
    label: "large"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      lineHeight: '28px',
      fontWeight: 600
    }
  }, "Are you sure absolutely sure?")), /*#__PURE__*/React.createElement(Specimen, {
    label: "small"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '14px',
      fontWeight: 500
    }
  }, "Email address")), /*#__PURE__*/React.createElement(Specimen, {
    label: "subtle",
    last: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--slate-500)'
    }
  }, "Enter your email address."))));
}
const SCALES = ['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'];
const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
function ColorsScreen() {
  const [hex, setHex] = React.useState({});
  React.useEffect(() => {
    const cs = getComputedStyle(document.documentElement);
    const o = {};
    SCALES.forEach(s => STEPS.forEach(n => {
      o[s + n] = cs.getPropertyValue('--' + s + '-' + n).trim();
    }));
    setHex(o);
  }, []);
  return /*#__PURE__*/React.createElement(DocPage, {
    title: "Colors",
    description: "Every Tailwind scale shipped in the kit. Slate is the working neutral."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, SCALES.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 63,
      fontSize: 12,
      lineHeight: '16px',
      fontWeight: 500,
      textTransform: 'capitalize'
    }
  }, s), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, STEPS.map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      width: 55,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 40,
      borderRadius: 3,
      background: 'var(--' + s + '-' + n + ')'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      lineHeight: '16px',
      fontWeight: 500
    }
  }, n, /*#__PURE__*/React.createElement("br", null), hex[s + n]))))))));
}
Object.assign(window, {
  TypographyScreen,
  ColorsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/FoundationScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/Header.jsx
try { (() => {
function Header({
  onHome,
  onNavigate,
  onSearch
}) {
  const {
    NavigationMenu,
    Button,
    Icon,
    Tooltip
  } = window.ShadcnUiDesignSystem_3aaf87;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      height: 64,
      borderBottom: '1px solid var(--slate-200)',
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(8px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      height: '100%',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onHome,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--slate-900)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 800,
      letterSpacing: -0.4
    }
  }, "shadcn/ui")), /*#__PURE__*/React.createElement(NavigationMenu, {
    items: [{
      label: 'Getting started',
      featured: {
        title: 'shadcn/ui',
        description: 'Beautifully designed components built with Radix UI and Tailwind CSS.'
      },
      links: [{
        title: 'Introduction',
        description: 'Re-usable components built using Radix UI and Tailwind CSS',
        onClick: onHome
      }, {
        title: 'Installation',
        description: 'How to install dependencies and structure your app.',
        onClick: onHome
      }, {
        title: 'Typography',
        description: 'Styles for headings, paragraphs, lists...etc',
        onClick: () => onNavigate('typography')
      }]
    }, {
      label: 'Components',
      links: [{
        title: 'Alert Dialog',
        description: 'A modal dialog that interrupts the user with important content and expects a response.',
        onClick: () => onNavigate('alert-dialog')
      }, {
        title: 'Hover Card',
        description: 'For sighted users to preview content available behind a link.',
        onClick: () => onNavigate('hover-card')
      }, {
        title: 'Progress',
        description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
        onClick: () => onNavigate('progress')
      }, {
        title: 'Scroll-area',
        description: 'Visually or semantically separates content.',
        onClick: () => onNavigate('scroll-area')
      }, {
        title: 'Tabs',
        description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
        onClick: () => onNavigate('tabs')
      }, {
        title: 'Tooltip',
        description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
        onClick: () => onNavigate('tooltip')
      }]
    }, {
      label: 'Documentation',
      onClick: () => onNavigate('colors')
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onSearch,
    style: {
      width: 240,
      height: 36,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 12px',
      border: '1px solid var(--slate-300)',
      borderRadius: 6,
      background: '#fff',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--slate-400)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    color: "var(--slate-400)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: 'left'
    }
  }, "Search documentation..."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--slate-500)',
      background: 'var(--slate-100)',
      borderRadius: 3,
      padding: '0 4px'
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement(Tooltip, {
    content: "GitHub",
    side: "bottom"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "icon",
    variant: "ghost",
    icon: "github",
    "aria-label": "GitHub"
  }))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/Sidebar.jsx
try { (() => {
function Sidebar({
  sections,
  current,
  onSelect
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 220,
      flex: 'none',
      boxSizing: 'border-box',
      padding: '24px 12px 24px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      position: 'sticky',
      top: 65,
      height: 'calc(100vh - 65px)',
      overflowY: 'auto'
    }
  }, sections.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 8px',
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 600,
      color: 'var(--slate-900)'
    }
  }, s.title), s.items.map(it => {
    const on = it.id === current;
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      onClick: () => onSelect(it.id),
      onMouseEnter: () => setHover(it.id),
      onMouseLeave: () => setHover(null),
      style: {
        padding: '6px 8px',
        borderRadius: 6,
        fontSize: 14,
        lineHeight: '20px',
        fontWeight: on ? 500 : 400,
        cursor: 'pointer',
        color: on ? 'var(--slate-900)' : 'var(--slate-500)',
        background: on ? 'var(--slate-100)' : hover === it.id ? 'var(--slate-50)' : 'transparent'
      }
    }, it.label);
  }))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/Sidebar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.AspectRatio = __ds_scope.AspectRatio;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.InlineCode = __ds_scope.InlineCode;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.ScrollArea = __ds_scope.ScrollArea;

__ds_ns.Separator = __ds_scope.Separator;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Collapsible = __ds_scope.Collapsible;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Command = __ds_scope.Command;

__ds_ns.ContextMenu = __ds_scope.ContextMenu;

__ds_ns.DropdownMenu = __ds_scope.DropdownMenu;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.MenuItem = __ds_scope.MenuItem;

__ds_ns.Menubar = __ds_scope.Menubar;

__ds_ns.NavigationMenu = __ds_scope.NavigationMenu;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.AlertDialog = __ds_scope.AlertDialog;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.HoverCard = __ds_scope.HoverCard;

__ds_ns.Popover = __ds_scope.Popover;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
