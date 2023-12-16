# Como criar bons componentes pt. 1

A principal ideia é pegar blocos de Javascript e lógicas complexas, e encapsular ele em componentes.

Após isso você pode compor seu componente final com os componentes abstraídos que você criou, como blocos de lego.

*Primitivo*
```tsx
<InputRoot>
  <InputIconWrapper>
    // Qualquer SVG
  </InputIconWrapper>
  <Input />
</InputRoot>
```

*Rico*
```tsx
<InputSecret.Root>
  <InputSecret.Input />
  <InputSecret.ToggleIconWrapper>
    <InputSecret.OnSecretHide>
      // Qualquer SVG
    </InputSecret.OnSecretHide>
    <InputSecret.OnSecretShow>
      // Qualquer SVG
    </InputSecret.OnSecretShow>
  </InputSecret.ToggleIconWrapper>
</InputSecret.Root>
```

É literalmente só copiar e colar.