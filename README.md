# revb
Nodejs command line file inverter
## Install
Clone or download this repository and install dependencies with ```npm install```
### Usage
Inverting file and save in same file ```nodejs revb.js -r filein```  
Inverting file and save in other file ```nodejs revb.js filein fileout```  
Inverting file and write to stdout ```nodejs revb.js filein > fileout```  
Inverting stdin and write to stdout ```cat filein | nodejs revb.js > fileout```  

### Example
I need hide secret video but i no need encrypt
First invert the video file ```nodejs revb.js -r video.mp4```  
And when i need watch video, invert the file and pipe to vlc without save file
```nodejs revb.js video.mp4 | vlc -```