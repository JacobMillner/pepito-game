----------- ----------- ----------- ----------- -----------

                         OBSHAGCE

   The Official Blueberry Soft Hypermedia Adventure Game
                    Construction Engine

----------- ----------- ----------- ----------- -----------

             https://obshagce.gamemaking.tools/
  https://www.gamemaking.tools/forum/categories/obshagce/
 … blueberrysoft.ryliejamesthomas.net/groups/obshagce.html
             https://tildegit.org/rjt/obshagce/

----------- ----------- ----------- ----------- -----------

 Hi!

 This is a little framework / template thing I'm working on
 for building hypermedia adventure games--simple
 collections of HTML and CSS and whatever media you want to
 stick in there.

 I've tried to keep things easy to understand, so avoided
 JavaScript and any ideas about trying to keep it as one
 page (EVIL). The only thing that's kinda dynamic (?) is
 the status window, which is an iframe. Otherwise each
 board is it's own HTML page with some inline CSS. There's
 a general style sheet (base.css) too.

 I hope this will encourage people to make more cool,
 personal websites. And explore the possabilites of a
 JS-free WWW.

----------- ----------- ----------- ----------- -----------
                           Goals
----------- ----------- ----------- ----------- -----------

 - Easy to read markup (semantic, and with comments).
 - Be a useful learning tool for HTML and CSS.
 - No JavaScript
   (but feel free to fork if you're into that).
 - Help show games can use simple technologies.
 - Promote cool, simple hypermedia.

----------- ----------- ----------- ----------- -----------
                     Project structure
----------- ----------- ----------- ----------- -----------

 /
 ├─ boards/
 │  ├── ...
 │  └── ...
 ├─ images/
 │  ├── ...
 │  └── ...
 ├─ messages/
 │  ├── ...
 │  └── ...
 ├─ sounds/
 │  ├── ...
 │  └── ...
 ├─ base.css
 ├─ games_list.txt
 ├─ index.html
 └─ readme.txt

----------- ----------- ----------- ----------- -----------

 So a game might work like this:
 You make a title/intro screen in index.html
 This points to HTML files in 'boards'
 These files have graphics and text and things you can
 click on in the cells on the right (what I call the map)
 and these open text, or HTML, or sounds, or whatever in
 the message widow in the lower left.
 You can also add some stuff to describe what is 'seen',
 'smelt', 'touched' etc., under the icons for those senses.

----------- ----------- ----------- ----------- -----------
                     Style Sheet Stuffs
----------- ----------- ----------- ----------- -----------

 Trying to explain the purpose / use of the IDs and
 classes used.

 Most of the CSS is in base.css, but some is kept in the
 HTML files so you can easily tweak things per-board, the
 colours, for example. Some CSS related to formating
 messages is in messages.css.

 IDs are to be used only once per page, but you can add
 classes wherever needed. You can even add multiple classes
 to an element.

----------- ----------- ----------- ----------- -----------

 Here's a diagram to show which section IDs and classes
 are effecting on the board pages.

 # signifies an ID
 . signifies a class

 ┌───────────────────────────────────────────────────────┐
 │                        #board                         │
 │                                                       │
 │ ┌────────────────────────┐ ┌────────────────────────┐ │
 │ │  #perception .window   │ │     #view .window      │ │
 │ │                        │ │                        │ │
 │ │┌──────────────────────┐│ │┌──────────────────────┐│ │
 │ ││        #senses       ││ ││         #map         ││ │
 │ ││                      ││ ││                      ││ │
 │ ││┌───┬───┬───┬───┬───┐ ││ ││┌───┬───┬───┬───┬───┐ ││ │
 │ │││   │   .icon   │   │ ││ │││   │   │   │   │   │ ││ │
 │ ││├───┼───┼───┼───┼───┤ ││ ││├───┼───┼───┼───┼───┤ ││ │
 │ │││   .description    │ ││ │││   │   │   │   │   │ ││ │
 │ ││└───┴───┴───┴───┴───┘ ││ ││├───┼───┼───┼───┼───┤ ││ │
 │ │└──────────────────────┘│ │││   │   .cell   │   │ ││ │
 │ └────────────────────────┘ ││├───┼───┼───┼───┼───┤ ││ │
 │ ┌────────────────────────┐ │││   │   │   │   │   │ ││ │
 │ │    #message .window    │ ││├───┼───┼───┼───┼───┤ ││ │
 │ │                        │ │││   │   │   │   │   │ ││ │
 │ │                        │ ││└───┴───┴───┴───┴───┘ ││ │
 │ │                        │ │└──────────────────────┘│ │
 │ └────────────────────────┘ └────────────────────────┘ │
 └───────────────────────────────────────────────────────┘
----------- ----------- ----------- ----------- -----------
 IDs:

 'board'        For all elements on the game boards.
 'titlescreen'  For all elements on the titlescreen.

 'view'         The window containing the map.
 'map'          The actual map grid.

 'perception'   The window containing sense information.
 'senses'       The grid containing the icons and
                descriptions for the senses.

 'message'      The window where messages appear.

 'credit'       For credits on the titlescreen.
 'notes'        For the notes section on the titlescreen.
 'splash'       For titlescreen images. You may or may
                not want the border.

----------- ----------- ----------- ----------- -----------
 Classes:

 'cell'         The individual cells that contain map
                content.

 'icon'         The cells that contain the sense icons.

 'description'  The cells that contain the sense
                descriptions.

 'title'        Title above game board. Game title or
                board title or ???.

 'window'       References elements that make up the main
                three windows, but exludes their contents.

 Also included at the end of 'base.css' are some clases you
 can apply for graphic effects. For example alignment and
 rotation.

 'align_*'      For easily alligning things in cells.

 'empty'        To make a cell as empty. It removes the
                border, so if used in the main game board
                the cell will not be indented.

 'no_scale'     For images you don't want to scale to fill
                a cell.

 'rotate_*'     For rotating elements, in 90 degree
                increments.

 'flip_*'       Flips the element on the vertical or
                horizonal axis.

 'shape_*'      Changes elements' shape.

 And some classes for animated effects :)
 These are disabled if a user has set their OS or browser
 to reduce animation.

 'blink'        Replicates the old <blink> tag. You can
                easily set the speed to your liking.

 'cycle'        A colour-cycling effect. Quickly cycles
                through a set of colours. Colours are easy
                enough to change. If you want to add more
                you'll need to add more steps (the numbers
                with the percent signs).

 'flipanim_*'   Repeatedly flips an element (like an image)
                for a simple animation effect. Like a
                downwards walking animation in an NES RPG.

 'rotateanim_*' Repeatedly rotates an element in 90° steps.

----------- ----------- ----------- ----------- -----------
 HTML

 <base target="message_frame">
                This makes links open thing in the message
                window unless told otherwise. Other targets
                you might find useful are
    _self       to open in the same window, and
    _blank      to open in a new tab or window depending
                on how the person's browser is set-up.

----------- ----------- ----------- ----------- -----------
----------- ----------- ----------- ----------- -----------
