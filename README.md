## Используемые библиотеки

- [Alpine](https://alpinejs.dev/)
- [tailwindcss](https://tailwindcss.com/)

## Структура проекта

- `public` - в этом разделе находятся статичные ассеты(пока только изображения)
- `src` - основной рабочий каталог
  - `assets` - каталог для ассетов которые необходимо каким-либо образом трансформировать
    - `fonts` - каталог для шрифтов
    - `images` - каталог для изображений (пока не используем)
    - `svg` - каталог для шрифтов (пока не используем)
  - `components` - каталог для компонентов, используется [posthtml-components](https://github.com/thewebartisan7/posthtml-components)
  - `layouts` - каталог для шаблонов страниц
  - `pages` - каталог для страниц
  - `scripts` - каталог для js файлов
  - `styles` - каталог для css файлов
- `tailwind.config.js` - файл конфигурации Tailwindcss
- `vite.config.js` - файл конфигурации Vite

### `/src/components`

В данном каталоге можно создавать необходимую структуру для использования в шаблонах, страницах и других компонентах.

Правила формирования имени компонента строится по следующему принципу:

`/src/components/global/Hero.html` - компонент с именем <c-global.Hero></c-global.Hero>
`/src/components/share/Card.html` - компонент с именем <c-share.Card></c-share.Card>
`/src/components/custom/Divider.html` - компонент с именем <c-custom.Divider></c-custom.Divider>

и т.д.

Таким образом если создать директорию `global` и поместить в нее компонент `Hero.html` он будет доступен **глобально** по проекту по имени `<c-global.Hero></c-global.Hero>`

### `/src/pages`

Шаблон страницы выглядит следующим образом:

```html
<extends src="layouts/main.html" locals='{ "title": "", "bodyClass": "" }'>
  <block name="body">
    <!-- ТУТ ПОДКЛЮЧАЕМ СВОИ КОМПОНЕНТЫ  -->
    <c-global.Hero></c-global.Hero>

    <c-share.Card></c-share.Card>
    <!-- И т.д. -->
  </block>
</extends>
```

- Атрибут `locals` объект, который передается в `layout` и расширяет его собственными значениями

## Команды для запуска

`npm run dev` - запустить в режиме разработки
`npm run build` - запустить сборку проекта
`npm run preview` - запустить проект после сборки
