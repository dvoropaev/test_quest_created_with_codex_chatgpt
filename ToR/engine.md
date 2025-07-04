# Техническое задание: Игровой движок

## 1. Общие требования
- Движок реализуется полностью на JavaScript без привлечения сторонних библиотек.
- Используются ES6-модули, код запускается в браузере без предварительной сборки.
- Поддерживаются современные версии Chrome (90+), Firefox (85+), Safari (14+), Edge (90+).
- DOM применяется для интерфейса, Canvas — для отрисовки динамических сцен.
- Движок рассчитан на стабильную работу при 60 FPS даже на слабых устройствах.
- Размер загружаемых скриптов не должен превышать 2 МБ без учёта ассетов.

## 2. Структура проекта
- Каталоги проекта:
  - `/src/core` — базовые классы `Game`, `Scene`, `Entity`.
  - `/src/ui` — элементы пользовательского интерфейса и управляющие панели.
  - `/src/data` — JSON-файлы с конфигурацией и диалогами.
  - `/assets` — шрифты и текстовые данные.
  - `/build` — готовые файлы для запуска.
- Менеджер ресурсов асинхронно загружает текстовые файлы и шрифты, кэшируя их в памяти.
- Все игровые сценарии пишутся в виде ES6-модулей и подключаются через главный файл `main.js`.

## 3. Управление состоянием
- Класс `StateManager` хранит текущую локацию, прогресс квестов, отношения с персонажами и инвентарь.
- Сохранение и загрузка данных выполняется через `localStorage` с резервированием в cookies, что обеспечивает совместимость даже при отключённом локальном хранилище.
- Структура сохранения — JSON, поддерживаются именованные слоты.
- Реализован авто‑сейв при переходах между локациями и по таймеру каждые 5 минут.
- Сохраняется не только прогресс заданий, но и состояние пользовательского интерфейса (открытые окна, последние выборы).

## 4. Система событий
- События построены на паттерне Observer: объекты подписываются на уведомления.
- Асинхронные события помещаются в очередь и могут иметь задержку выполнения.
- Базовый список событий: `onEnterLocation`, `onDialogChoice`, `onItemUsed`, `onBattleStart`, `onBattleEnd`.
- Пользователь может определять новые типы событий без модификации существующего кода.
- Очередь событий поддерживает приоритеты, позволяя обрабатывать критические события раньше фоновых.

## 5. Диалоговый движок
- Диалоги описываются в JSON как набор узлов с полями `text`, `choices`, `conditions`.
- Парсер диалогов формирует структуру классов `DialogNode` и `Choice`.
- Поддерживаются переменные (например, имя героя) и проверки характеристик для переходов.
- Диалоги выводятся либо через DOM-элементы, либо отрисовываются в Canvas.

## 6. Боевая система
- Бой реализован в виде конечного автомата со стадиями: подготовка, ход игрока, ход противника, завершение.
- Характеристики: здоровье, энергия, урон, защита и набор модификаторов статуса.
- Урон вычисляется как базовый + бонусы оружия − защита противника, учитывается вероятность критического удара.
- Новые виды оружия и навыков добавляются через JSON-описания без правки движка.

## 7. Логирование и отладка
- Модуль `Logger` поддерживает уровни `info`, `warn`, `error`, `debug`.
- Режим отладки отображает оверлей со списком последних событий и текущим состоянием сущностей.
- Логи можно выгружать в файл для последующего анализа.
- Для отладки предусмотрена консоль команд, позволяющая изменять параметры игры на лету.
- Логирование автоматически делит файлы по дате и очищает записи старше недели.

## 8. Производительность и оптимизация
- Главный цикл работает через `requestAnimationFrame`.
- Сокращаются обращения к DOM: скрытые элементы предварительно рендерятся в памяти.
- Крупные ресурсы подгружаются асинхронно по мере необходимости.
- Для часто создаваемых объектов используется object pooling.
- Память очищается через систему слабых ссылок, чтобы избежать утечек при смене локаций.

## 9. Расширяемость
- Базовые классы спроектированы для наследования и переопределения методов.
- Поддерживается каталог `/mods`, из которого загружаются пользовательские скрипты при старте игры.
- К движку прилагается документация с описанием API и примером создания собственного модуля.
- Система модов предоставляет механизм включения и отключения плагинов без перезагрузки страницы.
- Во встроенный редактор можно загружать ресурсы и тестировать новые сцены в реальном времени.

