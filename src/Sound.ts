namespace sfxkit
{
    export class Sound
    {
        public CreateObject(data:number[], bitrate:number):HTMLAudioElement
        {
            var wavData = this.createWav(data, bitrate);
            var encoded = btoa(wavData);
            var src = 'data:audio/wav;base64,' + encoded;
            
            var a = new Audio();
            a.src = src;
            return a;
        }

        createWav(data:number[], bitrate:number)
        {
            var n = data.length;
            var wavData = "RIFF****WAVEfmt \x10\x00\x00\x00\x01\x00\x01\x00********\x01\x00\x08\x00data****";

            // ChunkSize
            var numval = n + 36;
            wavData = this.insertLong(wavData,4,numval);

            numval = bitrate; // byterate
            wavData = this.insertLong(wavData,24,numval);
        
            // BitRate
            numval = bitrate * 8; //44100;
            wavData = this.insertLong(wavData,28,numval);
        
            // Subchunk2Size
            numval = n;
            wavData = this.insertLong(wavData,40,numval);
            
            // Output sound data
            for (var i = 0; i < n; ++i)
            {
                var charCode = Math.round(Math.min(127, Math.max(-127, data[i]*127))+127);
                wavData += String.fromCharCode(charCode);
            }
            
            return wavData		
        }

        insertLong(inString, index, inValue)
        {
            var retString = inString.substr(0,index);
            for (var i = 0; i < 4; ++i) 
            {
                retString += String.fromCharCode(inValue & 255);
                inValue = inValue >> 8;
            }
            retString += inString.substr(index+4);
            return retString;
        }

    }
}