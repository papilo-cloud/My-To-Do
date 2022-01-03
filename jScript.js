

var myToDo = document.getElementsByTagName('li')
for (var i = 0; i < myToDo.length; i++) {
        var span = document.createElement('SPAN')
        var del = document.createTextNode('\u00d7')
        span.className = 'close'
        span.appendChild(del)
        myToDo[i].appendChild(span)
    }

    var myUl = document.getElementById('myUl')
    var del = document.getElementsByClassName('close')
    for (let i = 0; i < del.length; i++) {
        del[i].onclick = function () {
            var current = this.parentElement
            current.remove()  
            li.length--
            demo.innerHTML = li.length
           
    }
}
    //Disabling the completed  button
    var actv = document.getElementsByClassName('btns')[2]
    actv.disabled = true;
    //adding the checked function to all list items
    var list = document.querySelector('ul')
		
			list.onclick = function (e) {
				if (e.target.tagName === 'LI') {
					e.target.classList.toggle('checked')
                    actv.disabled = false;
				}
			}

    var btn = document.getElementById('addBtn')
    
    // Adding new items to our ToDo list..
    btn.addEventListener('click',function(){
        var inputTxt = document.getElementById('txt').value
        var elem = document.createElement('li')
        var newTxt = document.createTextNode(inputTxt)
        elem.appendChild(newTxt)
        if (inputTxt == '') {
            alert('type something')
        } else {
            myUl.appendChild(elem)
        }

        //Adding the close to our item
        for (let i = 0; i < myToDo.length; i++) {
            var span = document.createElement('SPAN')
            var del = document.createTextNode('\u00d7')
            span.className = 'close'
            span.appendChild(del)
            myToDo[i].appendChild(span)
        }
        
        //Making the close function work
        var del = document.getElementsByClassName('close')
        for (let i = 0; i < del.length; i++) {
            del[i].onclick = function () {
                var current = this.parentElement
                current.remove();
               li.length--
                demo.innerHTML = li.length
            }
        }
            var count = 0;
			count += li.length
			demo.innerHTML = count
			
    })
   
    /*## function for clearing completed items */
    
    var li = list.getElementsByTagName('LI')

    function filterAll4() {
        for (var i = 0; i < li.length; i++) {
            if (li[i].className == 'checked') {
                // li[i].style.display = 'none'		
                 li[i].remove()
                 li.length--
                 demo.innerHTML = li.length
        }
    }
}
var demo = document.getElementById('demo')
demo.innerHTML = li.length
    /**### function for filtering all items ###**/
    
    function filterAll1() {
        for (var i = 0; i < li.length; i++) {
            if (li[i].className == 'checked' || li[i].className !== 'checked') {
                li[i].style.display = 'block'
            }
        }
        var clsName = document.getElementsByClassName('active')[0]
            clsName.className = clsName.className.replace('active', '')
         btns[0].className += ' active'
    }

    /**### function for filtering active items ###**/
    var btns = document.getElementsByClassName('btns')

    function filterAll2() {
        for (var i = 0; i < li.length; i++) {
            if (li[i].className == 'checked') {
                li[i].style.display = 'none'
            }else{
                li[i].style.display = 'block'
            }
        }
          for (var i = 0; i < btns.length; i++) {
            var clsName = document.getElementsByClassName('active')[0]
            clsName.className = clsName.className.replace('active', '')
             btns[1].className += ' active'
        
    }
    }

    /**### function for filtering completed items ###**/
   
    function filterAll3() {
        for (var i = 0; i < li.length; i++) {
            if (li[i].className !== 'checked') {
                li[i].style.display = 'none'             
            }else{
                li[i].style.display = 'block'
            }
           
        }
         var clsName = document.getElementsByClassName('active')[0]
            clsName.className = clsName.className.replace('active', '')
             btns[2].className += ' active'
    }

/**## Toggle to switch between light and dark mode ##**/
  
    var mode = document.getElementById('mode')
    var bdy = document.getElementById('bdy')
    var pic = document.getElementById('pic')
    var sect = document.getElementsByClassName('sect')[0]
    var picMb = document.getElementById('imgBgMobile')
    var picDsk = document.getElementById('imgBgDesk')
    
    mode.onclick = function () {
       bdy.classList.toggle('light')
        sect.classList.toggle('light')
    }

    




