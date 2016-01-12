/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 
 
/*---------------------------------------------------
YYEEEEAAAAAAHHHH MAAAAAAAAAAN GET THIS STARTED!
-----------------------------------------------------
*/
 

var firstArrayLength = firstHalf.length; //get the length of the first proverbs list
var secondArrayLength = secondHalf.length; //get the length of the second proverbs list

 
function proverbButton() {

document.getElementById("intro").style.display = "none";
document.getElementById("facebook").style.display = "block";

var x = Math.floor((Math.random() * firstArrayLength)); //create random number between 0 and the length of the first proverb list
var y = Math.floor((Math.random() * secondArrayLength)); //create random number between 0 and the length of the second proverb list

if (x!=y) {
	
document.getElementById('proverb-button').innerHTML = 'Another one!';

document.getElementById('proverb1').innerHTML = firstHalf[x] + " " + secondHalf[y]; //assign our random numbers, x and y, to elements in the proverbs list

document.getElementById("flower-break").style.display = "block";

document.getElementById('proverb2').innerHTML = firstHalf[y] + " " + secondHalf[x]; //keep the same x and y to assign it to the second half of the first proverb
} else {

var x = Math.floor((Math.random() * firstArrayLength)); //create random number between 0 and the length of the first proverb list
var y = Math.floor((Math.random() * secondArrayLength)); //create random number between 0 and the length of the second proverb list


document.getElementById('proverb-button').innerHTML = 'Make another one!';

document.getElementById('proverb1').innerHTML = firstHalf[x] + " " + secondHalf[y]; //assign our random numbers, x and y, to elements in the proverbs list

document.getElementById("flower-break").style.display = "block";

document.getElementById('proverb2').innerHTML = firstHalf[y] + " " + secondHalf[x]; //keep the same x and y to assign it to the second half of the first proverb
}
}

function infoButton() {
	document.getElementById('info-box').style.visibility = 'visible';
	document.getElementById('info-box').style.opacity = '1';
	document.getElementById('clear-tape').style.visibility = 'visible';
	document.getElementById('clear-tape').style.display = 'block';
	document.getElementById('clear-tape').style.opacity = '0.2';
}

function closeInfoBox() {
	document.getElementById('info-box').style.visibility = 'hidden';
	document.getElementById('info-box').style.opacity = '0';
	document.getElementById('clear-tape').style.visibility = 'hidden';
	document.getElementById('clear-tape').style.opacity = '0';
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

