$(()=>{
    class bookingServices {

    }

    class helpersFuncS extends bookingServices{
        borderRemoverAsScreen(elements,screenSize,biggerSize,smallerSize){
            if(smallerSize&&biggerSize&&window.innerWidth>screenSize[0]&&window.innerWidth<screenSize[1]){
                borderRemover()
            }else if(biggerSize&&window.innerWidth<screenSize){
                borderRemover()
            }else if(smallerSize&&window.innerWidth>screenSize){
                borderRemover()
            }
            function borderRemover(){
                $(elements).each((index,element)=>{
                    $(element).removeClass('border-start')
                })
            }

        }
        bookingHeadersEvent(){
            $('.services').each((index,element)=>{
                $(element).click(()=>{
                    $('.activedTitle').addClass('card-header-items-hover')
                    $('.activedTitle').removeClass('activedTitle text-primary')
                    $(element).addClass('text-primary activedTitle card-header-items-hover')
                })
            })
        }
        bookingSectionDropdownSetter(){
            function generator(data){
                console.log(data)
                let dropdownsNumber=+(data.dropdowns)

                for (let i=0;i<dropdownsNumber;i++){
                    $('.dropdowns-place').append(`<div class="mb-3 me-5">
                    <div class="dropdown dropdown-center position-relative" style="left: .5rem">
                        <button class="dropdown-toggle rounded-pill bg-white border border-1 text-muted"
                                style="width: 6rem" data-bs-toggle="dropdown"
                                data-bs-target="#card-dropdown-menu${i}">${data.dropdownTitle[i]}
                        </button>
                        <ul class="dropdown-menu" id="card-dropdown-menu${i}">

                        </ul>
                    </div>
                </div>`)
                }
                $(data.dropdownItems).each((index,itemNumber)=>{
                    for(let i=0;i<itemNumber;i++){
                        $(`#card-dropdown-menu${index}`).append(`<li class="dropdown-item"><a class="nav-link" href="#">${data.dropdownItemsInner[index][i]}</a></li>`)
                        if((i%2)===0){
                            $(`#card-dropdown-menu${index}`).append(`<li class="dropdown-divider"></li>`)
                        }
                    }
                })
            }
            let paraments=new URLSearchParams(window.location.search)

            if(!paraments.get('page')){
                console.log(paraments.get('page'))
                $.ajax({url:'https://ticket-reservation-fa3df-default-rtdb.firebaseio.com//servicesDropdowns/_NMoL8r-GB6AmDg2TILT/innerFlight.json',success:(result)=>{
                        generator(result)
                }})
            }else {
                console.log(paraments.get('page'))
                $.ajax({url:`https://ticket-reservation-fa3df-default-rtdb.firebaseio.com/servicesDropdowns/_NMoL8r-GB6AmDg2TILT/${paraments.get('page')}.json`,success:(result)=>{
                        generator(result)
                }})
            }
        }
    }

    const borderXSNone=$('.border-xs-none')

    const borderMDNone=$('.border-md-none')

    const borderLGNone=$('.border-lg-none')

    let helperClass=new helpersFuncS()

    helperClass.borderRemoverAsScreen(borderXSNone,576,true,false)

    helperClass.borderRemoverAsScreen(borderMDNone,[576,768],true,true)

    helperClass.borderRemoverAsScreen(borderLGNone,[768,992],true,true)

    helperClass.bookingHeadersEvent()

    helperClass.bookingSectionDropdownSetter()

    $(window).resize(()=>{
        if(window.innerWidth<567){
            borderAdder(borderMDNone)
            borderAdder(borderLGNone)
            helperClass.borderRemoverAsScreen(borderXSNone,576,true,false)
        }else if(window.innerWidth>567&&window.innerWidth<768){
            borderAdder(borderXSNone)
            borderAdder(borderLGNone)
            helperClass.borderRemoverAsScreen(borderMDNone,[576,768],true,true)
        }else if(window.innerWidth>768&&window.innerWidth<992){
            borderAdder(borderXSNone)
            borderAdder(borderMDNone)
            helperClass.borderRemoverAsScreen(borderLGNone,[768,992],true,true)
        }else {
            borderAdder(borderXSNone)
            borderAdder(borderMDNone)
            borderAdder(borderLGNone)
        }
        function borderAdder(elements){
            $(elements).each((index,element)=>{
                $(element).addClass('border-start')
            })
        }
    })
})
// fetch('https://ticket-reservation-fa3df-default-rtdb.firebaseio.com/servicesDropdowns/_NMoL8r-GB6AmDg2TILT.json',{
//     method:'Put',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         outerFlight:{
//             name:'outerFlight',
//             dropdowns:'2',
//             dropdownItems:[2,4],
//             dropdownItemsInner:[['shit','xnfs'],['shit','xdf']],
//             dropdownTitle:['one way','shit']
//         },
//         innerFlight:{
//             name:'outerFlight',
//             dropdowns:'2',
//             dropdownItems:[2,4],
//             dropdownItemsInner:[['shit','xnfs'],['shit','xdf']],
//             dropdownTitle:['one way1','shit']
//         }
//     })
// })

