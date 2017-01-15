var sfxkit;
(function (sfxkit) {
    class ComponentNumber {
        GetNextValue(timespan) {
            return this.value;
        }
        Reset() {
            return;
        }
        SetValue(value) {
            this.value = value;
            return this;
        }
    }
    sfxkit.ComponentNumber = ComponentNumber;
})(sfxkit || (sfxkit = {}));
var sfxkit;
(function (sfxkit) {
    class ComponentSine {
        constructor(freq) {
            this.angle = 0;
            this.initialAngle = 0;
            this.frequency = freq;
        }
        GetNextValue(timeSpan) {
            var angleInc = timeSpan * this.frequency.GetNextValue(timeSpan) * (Math.PI * 2);
            this.angle += angleInc;
            if (this.angle >= Math.PI * 2)
                this.angle -= Math.PI * 2;
            return Math.sin(this.angle);
        }
        ;
        Reset() {
            this.angle = this.initialAngle;
            this.frequency.Reset();
        }
        SetFrequency(value) {
            this.frequency = value;
            return this;
        }
        InitialAngle(initailAngle) {
            this.initialAngle = initailAngle;
            return this;
        }
    }
    sfxkit.ComponentSine = ComponentSine;
})(sfxkit || (sfxkit = {}));
var sfxkit;
(function (sfxkit) {
    class PlayerBasic {
        BuildData(bitrate, duration, osc) {
            var values = new Array();
            var valueSize = 1;
            var inc = 1 / bitrate;
            values[0] = osc.GetNextValue(0);
            for (var x = inc; x <= duration; x = x + inc) {
                var value = osc.GetNextValue(inc);
                values[valueSize++] = value;
            }
            return values;
        }
    }
    sfxkit.PlayerBasic = PlayerBasic;
})(sfxkit || (sfxkit = {}));
var sfxkit;
(function (sfxkit) {
    class Sound {
        CreateObject(data, bitrate) {
            var wavData = this.createWav(data, bitrate);
            var encoded = btoa(wavData);
            var src = 'data:audio/wav;base64,' + encoded;
            var a = new Audio();
            a.src = src;
            return a;
        }
        createWav(data, bitrate) {
            var n = data.length;
            var wavData = "RIFF****WAVEfmt \x10\x00\x00\x00\x01\x00\x01\x00********\x01\x00\x08\x00data****";
            var numval = n + 36;
            wavData = this.insertLong(wavData, 4, numval);
            numval = bitrate;
            wavData = this.insertLong(wavData, 24, numval);
            numval = bitrate * 8;
            wavData = this.insertLong(wavData, 28, numval);
            numval = n;
            wavData = this.insertLong(wavData, 40, numval);
            for (var i = 0; i < n; ++i) {
                var charCode = Math.round(Math.min(127, Math.max(-127, data[i] * 127)) + 127);
                wavData += String.fromCharCode(charCode);
            }
            return wavData;
        }
        insertLong(inString, index, inValue) {
            var retString = inString.substr(0, index);
            for (var i = 0; i < 4; ++i) {
                retString += String.fromCharCode(inValue & 255);
                inValue = inValue >> 8;
            }
            retString += inString.substr(index + 4);
            return retString;
        }
    }
    sfxkit.Sound = Sound;
})(sfxkit || (sfxkit = {}));
