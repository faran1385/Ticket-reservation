$(()=>{
    class helpersFuncS{
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
    }

    const borderXSNone=$('.border-xs-none')

    const borderMDNone=$('.border-md-none')

    const borderLGNone=$('.border-lg-none')

    let helperClass=new helpersFuncS()

    helperClass.borderRemoverAsScreen(borderXSNone,576,true,false)

    helperClass.borderRemoverAsScreen(borderMDNone,[576,768],true,true)

    helperClass.borderRemoverAsScreen(borderLGNone,[768,992],true,true)

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

    $('.services').each((index,element)=>{
        $(element).click(()=>{
            $('.activedTitle').addClass('card-header-items-hover')
            $('.activedTitle').removeClass('activedTitle text-primary')
            $(element).addClass('text-primary activedTitle card-header-items-hover')
        })
    })
})