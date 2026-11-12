// Windows PC data for Key Quest
window.PC=(function(){
const W=[
 {w:1,name:"Apps & windows",items:[
  ["Open Start search","⊞ S"],
  ["Switch between apps","Alt Tab"],
  ["Show the desktop","⊞ D"],
  ["Close a tab or document","Ctrl W"],
  ["Close the app","Alt F4"],
  ["Minimize the current window","⊞ ↓"],
  ["Minimize all windows","⊞ M"],
  ["Open Windows Settings","⊞ I"],
  ["Open Task View (all windows)","⊞ Tab"]]},
 {w:2,name:"Text editing",items:[
  ["Jump one word left","Ctrl ←","text"],
  ["Jump to end of line","End","text"],
  ["Jump to top of document","Ctrl Home","text"],
  ["Select to end of line","Shift End","text"],
  ["Select the next word","Ctrl Shift →","text"],
  ["Delete the previous word","Ctrl Backspace","text"],
  ["Delete the next word","Ctrl Delete","text"],
  ["Forward delete","Delete","text"],
  ["Paste as plain text","Ctrl Shift V"],
  ["Redo","Ctrl Y"]]},
 {w:3,name:"Screen & windows",items:[
  ["Snap window to left half","⊞ ←"],
  ["Maximize the window","⊞ ↑"],
  ["Open snap layouts","⊞ Z"],
  ["Move window to the other monitor","⊞ Shift →"],
  ["Switch to the next virtual desktop","⊞ Ctrl →"],
  ["Screenshot tool (snip an area)","⊞ Shift S"],
  ["Screenshot whole screen to a file","⊞ PrtSc"],
  ["Clipboard history","⊞ V"],
  ["Lock the screen","⊞ L"]]},
 {w:4,name:"File Explorer",items:[
  ["Open File Explorer","⊞ E"],
  ["Toggle the preview pane","Alt P","File Explorer"],
  ["Go up one folder","Alt ↑","File Explorer"],
  ["Type a folder path","Ctrl L","File Explorer"],
  ["Rename the selected file","F2","File Explorer"],
  ["New folder","Ctrl Shift N","File Explorer"],
  ["Properties","Alt Enter","File Explorer"],
  ["Cut a file (to move it)","Ctrl X","File Explorer"],
  ["Delete permanently (skip Recycle Bin)","Shift Delete","File Explorer"]]},
 {w:5,name:"Browser & power",items:[
  ["Jump to address bar","Ctrl L","browser"],
  ["Reopen the tab you just closed","Ctrl Shift T","browser"],
  ["Go to the last tab","Ctrl 9","browser"],
  ["Next tab","Ctrl Tab","browser"],
  ["Find on page","Ctrl F"],
  ["Find next match","F3"],
  ["Open Task Manager","Ctrl Shift Esc"],
  ["Emoji picker","⊞ ."],
  ["Show ribbon shortcut letters","Alt","Office apps"]]}
];
const TIP={
"Open Start search":"Start typing the name of any app, file, or setting, then press Enter. Just tapping ⊞ works too.",
"Switch between apps":"Hold Alt and keep tapping Tab to move along. Let go to switch.",
"Show the desktop":"Press it again to bring all your windows back.",
"Close a tab or document":"Closes the tab or document but leaves the app open.",
"Close the app":"Closes the whole app. On the empty desktop it opens the shut down menu.",
"Minimize the current window":"If the window is maximized, the first press restores it. Press again to minimize.",
"Minimize all windows":"Clears the screen. ⊞ Shift M brings them back.",
"Open Windows Settings":"Opens the main Windows Settings app.",
"Open Task View (all windows)":"Shows every open window and your virtual desktops.",
"Jump one word left":"Ctrl means by word. Add Shift to select as you go.",
"Jump to end of line":"Home goes to the start. On many laptops Home and End share the arrow keys (fn + ← or →).",
"Jump to top of document":"Ctrl End goes to the bottom. Add Shift to select everything in between.",
"Select to end of line":"Shift selects. Shift Home selects back to the start of the line.",
"Select the next word":"Keep holding Ctrl Shift and tap → again to grab more words.",
"Delete the previous word":"Much faster than holding Backspace.",
"Delete the next word":"Deletes the word to the right of the cursor.",
"Forward delete":"Backspace erases to the left. Delete erases to the right.",
"Paste as plain text":"Pastes without the original formatting. Works in browsers and most newer apps.",
"Redo":"Undo is Ctrl Z. Ctrl Y brings back what you just undid.",
"Snap window to left half":"Use → for the right half. Windows then offers to fill the other side.",
"Maximize the window":"⊞ ↓ restores or minimizes it.",
"Open snap layouts":"Shows layout options. Press a number to pick a spot.",
"Move window to the other monitor":"Moves the window to your other screen without dragging.",
"Switch to the next virtual desktop":"⊞ Ctrl ← goes back. ⊞ Ctrl D creates a new desktop.",
"Screenshot tool (snip an area)":"Drag around what you want. It is copied so you can paste it straight into an email.",
"Screenshot whole screen to a file":"Saves to Pictures, then Screenshots. On some laptops PrtSc needs fn.",
"Clipboard history":"Shows everything you copied recently. Turn it on the first time you use it.",
"Lock the screen":"Locks instantly when you step away from your desk.",
"Open File Explorer":"Opens a new File Explorer window from anywhere.",
"Toggle the preview pane":"Shows a preview of the selected file on the right side.",
"Go up one folder":"Goes up to the folder that contains this one.",
"Type a folder path":"Highlights the address bar. Type a path and press Enter.",
"Rename the selected file":"Also edits the selected cell in Excel.",
"New folder":"Creates a new folder and lets you type its name.",
"Properties":"Shows size, dates, and location of the selected file.",
"Cut a file (to move it)":"Then open the new folder and press Ctrl V to move it there.",
"Delete permanently (skip Recycle Bin)":"Careful: there is no Recycle Bin copy to restore.",
"Jump to address bar":"Selects the web address so you can type a new one or a search.",
"Reopen the tab you just closed":"Press it again to bring back more closed tabs.",
"Go to the last tab":"Ctrl 1 through Ctrl 8 jump to those tabs. Ctrl 9 is always the last one.",
"Next tab":"Add Shift to go to the previous tab.",
"Find on page":"Works in browsers, Word, Outlook, and most apps.",
"Find next match":"After Ctrl F, F3 steps through each match. Shift F3 goes back.",
"Open Task Manager":"To close a frozen app, select it and click End task.",
"Emoji picker":"The Windows key and the period key. Opens emoji and symbols wherever you are typing.",
"Show ribbon shortcut letters":"In Word, Excel, or Outlook, tap Alt and letters appear on the ribbon. Press them to run commands."
};
const row=(s,f)=>s.split(" ").map(c=>[c,1,f?f(c):c.toLowerCase()]);
const KB=[
 [["Esc",1,"esc"],...row("F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12"),["",1.5,"x"]],
 [...row("` 1 2 3 4 5 6 7 8 9 0 - ="),["Backspace",1.5,"backspace"]],
 [["Tab",1.5,"tab"],...row("Q W E R T Y U I O P [ ] \\")],
 [["Caps",1.8,"caps"],...row("A S D F G H J K L ; '"),["Enter",1.7,"enter"]],
 [["Shift",2.25,"shift"],...row("Z X C V B N M , . /"),["Shift",2.25,"shiftR"]],
 [["Ctrl",1.25,"ctrl"],["⊞ Win",1.25,"win"],["Alt",1.25,"alt"],["",5.5,"space"],["Alt",1.25,"altR"],["Ctrl",1,"ctrlR"],["←",1,"left"],"ARROWS",["→",1,"right"]]
];
KB.nav=[[["PrtSc",1,"prtsc"]],[["Ins",1,"ins"],["Home",1,"home"]],[["Del",1,"delete"],["End",1,"end"]],[null],[null],[null]];
const KMAP={"⊞":"win","Ctrl":"ctrl","Alt":"alt","Shift":"shift","Space":"space","Tab":"tab","Enter":"enter","Esc":"esc","Backspace":"backspace","Delete":"delete","Home":"home","End":"end","PrtSc":"prtsc","←":"left","→":"right","↑":"up","↓":"down"};
const KNOTE={
"⊞":"Windows key (⊞): bottom row, between Ctrl and Alt.",
"PrtSc":"Print Screen: top-right, may be labeled PrtSc or Prt Scr. Some laptops need fn.",
"Home":"Home: in the block right of Backspace. On many laptops it is fn + ←.",
"End":"End: in the block right of Backspace. On many laptops it is fn + →.",
"Delete":"Delete: in the block right of Backspace. It erases to the right.",
".":"Period (.): bottom row, right of comma.",
"F2":"F2: top row. Some laptops need fn.",
"F3":"F3: top row. Some laptops need fn.",
"F4":"F4: top row. Some laptops need fn."
};
const H=[
 {task:"Jump to the end of the line.",text:"The quick| brown fox jumps",par:1,ans:"End",check:(v,s,e)=>s===e&&s===v.length},
 {task:"Jump to the start of the line.",text:"Meet me at the Houston office|",par:1,ans:"Home",check:(v,s,e)=>s===0&&e===0},
 {task:"Put the cursor at the start of the word \"fox\".",text:"|The quick brown fox jumps",par:3,ans:"Ctrl → Ctrl → Ctrl →",check:(v,s,e)=>s===e&&s===16},
 {task:"Select the word \"partner\".",text:"Call the |partner tomorrow",par:1,ans:"Ctrl Shift →",check:(v,s,e)=>v.slice(s,e).trim()==="partner"},
 {task:"Delete the last word.",text:"Please send the draft today|",par:1,ans:"Ctrl Backspace",check:(v)=>v==="Please send the draft "},
 {task:"Select the entire line.",text:"|Offer letter goes out Friday",par:1,ans:"Shift End",check:(v,s,e)=>s===0&&e===v.length},
 {task:"Delete everything before the cursor on this line.",text:"DELETE ALL OF THIS |keep this part",par:2,ans:"Shift Home ~then Backspace",check:(v)=>v==="keep this part"},
 {task:"Delete the X using forward delete.",text:"Hello |Xworld",par:1,ans:"Delete",check:(v)=>v==="Hello world"},
 {task:"Jump to the very bottom of the document.",text:"|Line one\nLine two\nLine three\nLine four",par:1,ans:"Ctrl End",check:(v,s,e)=>s===e&&s===v.length},
 {task:"Select the last two words.",text:"Interview is set for next week|",par:2,ans:"Ctrl Shift ← Ctrl Shift ←",check:(v,s,e)=>v.slice(s,e).trim()==="next week"}
];
return {W,TIP,KB,KMAP,KNOTE,H};
})();
