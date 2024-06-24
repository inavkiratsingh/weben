import gsap from 'gsap'
import React, { useEffect } from 'react'

function Hero() {

    function animate()  {
        var tl = gsap.timeline();
        tl.from(".headline span", {
            y: 120,
        })
        tl.to(".headline span", {
            y: 0,
            duration: .5,
            delay: -0.5,
            stagger: .12,
            opacity: 1
        })
    }
    useEffect(() => {
        animate()
    })
    
    return (
        <>
        <div className="w-full relative">

            <div className='pl-[350px] pr-[750px] flex flex-wrap mt-10 headline'>
                {"We launch winning brands and build extraordinary digital experiences.".split(" ").map((item, index) => (
                    index === 7 ? <span className='opacity-0 text-8xl grotesk tracking-tight leading-[7rem] mr-12'>{item}</span> : <span className='opacity-0 text-8xl grotesk tracking-tight leading-[6rem] mr-7'>{item}</span>
                ))}
            </div>
            <div className="absolute w-full top-[23rem] flex justify-center">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" stroke='#FF5E5E' strokeOpacity='0.5' strokeWidth='.4px' width={'60%'} viewBox="19 218 458.25 98.75"> <path fill="none" d="M0 0 C2.99004368 2.62761414 3.91840622 5.37969074 4.3140564 9.31387329 C4.31531525 10.19336639 4.3165741 11.0728595 4.31787109 11.97900391 C4.32483002 12.98420074 4.33178894 13.98939758 4.33895874 15.02505493 C4.33796173 16.10217743 4.33696472 17.17929993 4.3359375 18.2890625 C4.35623688 20.59245268 4.37708785 22.89583806 4.3984375 25.19921875 C4.42096566 28.81302954 4.43748235 32.42664972 4.44335938 36.04052734 C4.45294672 39.54038602 4.48680963 43.03939629 4.5234375 46.5390625 C4.51839203 47.60403961 4.51334656 48.66901672 4.50814819 49.76626587 C4.61107842 57.71393278 5.62936673 65.85514144 11.01351929 72.06143188 C14.83004998 75.32305614 18.82095104 75.13425605 23.6171875 75.11328125 C26.99408585 74.69791196 28.69930338 73.17569662 31.0625 70.8125 C31.7225 70.8125 32.3825 70.8125 33.0625 70.8125 C35.09795395 65.72386513 35.42854492 61.27043272 35.4375 55.875 C35.47423828 54.71581055 35.47423828 54.71581055 35.51171875 53.53320312 C35.54072057 47.81501103 34.42511694 44.46934033 31.0625 39.8125 C25.03963344 35.10056538 16.39234039 34.67350134 9.0625 33.8125 C7.63752514 29.35945356 6.52506328 25.54194312 7.0625 20.8125 C8.1796875 19.1640625 8.1796875 19.1640625 10.0625 17.8125 C20.89077479 16.34181554 33.08163827 17.96852538 42.1875 24.3046875 C49.56947439 30.24102524 54.99319265 36.40743385 57.0625 45.8125 C58.28979701 59.8443137 56.89728409 72.36000211 48.0625 83.8125 C40.84781719 91.02718281 31.37126905 94.02308948 21.4375 94.0625 C9.65256107 94.04390758 -0.56508431 90.84952539 -9.3125 82.5625 C-16.42534163 70.52538339 -17.25000061 57.65281544 -17.1328125 43.953125 C-17.1299826 42.68273376 -17.12715271 41.41234253 -17.12423706 40.10345459 C-17.11501984 36.76949009 -17.09713673 33.43581411 -17.0748291 30.10192871 C-17.05415776 26.68256079 -17.04519043 23.26316275 -17.03515625 19.84375 C-17.01323568 13.16658889 -16.97986446 6.48956105 -16.9375 -0.1875 C-11.12883596 -1.3882139 -5.62154902 -2.27254109 0 0 Z " transform="translate(258.9375,220.1875)"></path> <path d="M0 0 C3.85438107 4.11969219 5.97743031 8.98823943 8.04296875 14.18359375 C8.30980469 14.85132813 8.57664062 15.5190625 8.8515625 16.20703125 C12.16317344 26.66715409 10.81239835 38.47970238 6.04296875 48.18359375 C1.23266708 56.97483473 -7.24980403 62.87996883 -16.80712891 65.73657227 C-19.15506234 66.22476964 -21.29009318 66.31307023 -23.6875 66.31640625 C-25.01491211 66.31833984 -25.01491211 66.31833984 -26.36914062 66.3203125 C-27.28501953 66.31644531 -28.20089844 66.31257813 -29.14453125 66.30859375 C-30.07201172 66.31246094 -30.99949219 66.31632812 -31.95507812 66.3203125 C-32.83615234 66.31902344 -33.71722656 66.31773437 -34.625 66.31640625 C-35.43219482 66.31527832 -36.23938965 66.31415039 -37.07104492 66.31298828 C-38.95703125 66.18359375 -38.95703125 66.18359375 -39.95703125 65.18359375 C-40.08238777 63.58311173 -40.13277912 61.97643447 -40.14453125 60.37109375 C-40.15871094 59.49839844 -40.17289062 58.62570312 -40.1875 57.7265625 C-39.79384358 53.38299761 -39.79384358 53.38299761 -37.95703125 51.18359375 C-35.15838965 50.33337352 -32.56672337 49.70266392 -29.70703125 49.18359375 C-23.94118821 48.11547874 -19.63423274 46.99359375 -14.95703125 43.18359375 C-11.21389923 36.19641398 -10.81718146 28.54707299 -12.4609375 20.8125 C-13.99600848 16.17219973 -15.84369566 12.81612853 -19.95703125 10.18359375 C-25.47048524 9.58110704 -31.66147681 9.25680751 -36.95703125 11.18359375 C-38.13731409 13.33457308 -38.13731409 13.33457308 -38.95703125 16.18359375 C-39.73046875 17.88515625 -39.73046875 17.88515625 -40.51953125 19.62109375 C-43.81428698 28.59123884 -43.01686758 39.11001423 -43.09765625 48.5625 C-43.11215065 49.92483009 -43.11215065 49.92483009 -43.12693787 51.31468201 C-43.18676148 56.97277199 -43.18676148 56.97277199 -43.20751953 62.63110352 C-43.21084617 65.42144284 -43.24527557 68.20997499 -43.28515625 71 C-43.27808655 71.84897354 -43.27101685 72.69794708 -43.26373291 73.57264709 C-43.28835602 74.76560646 -43.28835602 74.76560646 -43.31347656 75.98266602 C-43.31712219 76.67546158 -43.32076782 77.36825714 -43.32452393 78.08204651 C-44.36165669 81.52798843 -46.13097308 83.02002187 -48.95703125 85.18359375 C-51.79577135 85.5513062 -53.97523276 85.66990179 -56.76953125 85.49609375 C-57.46240234 85.47353516 -58.15527344 85.45097656 -58.86914062 85.42773438 C-60.56604698 85.36922036 -62.26182986 85.27954855 -63.95703125 85.18359375 C-64.02697503 77.17669601 -64.08006521 69.16992893 -64.11246777 61.16279984 C-64.12803039 57.44354604 -64.14909323 53.72450341 -64.18334961 50.00537109 C-64.21628318 46.40675574 -64.23395468 42.80834169 -64.24166298 39.2095871 C-64.2497891 37.18915662 -64.27315219 35.16880554 -64.29692078 33.14849854 C-64.29890805 22.09450954 -63.14594049 10.12254772 -55.95703125 1.18359375 C-40.17904397 -12.99172582 -16.38371973 -13.48394633 0 0 Z " fill="none" transform="translate(386.95703125,227.81640625)"></path> <path d="M0 0 C8.6645332 8.26202433 10.9752836 20.42962362 11.5 31.875 C11.21708045 42.32813299 7.61234313 49.79853326 0.44140625 57.28125 C-11.00826275 67.93928927 -22.16604995 67.97118105 -37.12182617 67.50097656 C-37.70037354 67.4800293 -38.2789209 67.45908203 -38.875 67.4375 C-38.92929959 65.68784642 -38.96792823 63.93770213 -39 62.1875 C-39.02320313 61.21296875 -39.04640625 60.2384375 -39.0703125 59.234375 C-38.86822672 56.34050661 -38.60626577 54.76005961 -36.875 52.4375 C-34.87890625 51.75 -34.87890625 51.75 -32.4375 51.4375 C-25.43977835 50.25936399 -18.39557214 48.95807214 -13.25 43.8125 C-10.27457655 36.50918791 -10.13912327 28.10981014 -11.875 20.4375 C-13.59910116 17.01526469 -13.59910116 17.01526469 -15.875 14.4375 C-16.28105469 13.89609375 -16.68710938 13.3546875 -17.10546875 12.796875 C-19.77226466 10.74821059 -22.0020578 11.07615125 -25.3125 11.125 C-26.44558594 11.12886719 -27.57867187 11.13273437 -28.74609375 11.13671875 C-31.75435604 11.42590252 -33.42039518 11.72317283 -35.875 13.4375 C-37.13594677 15.05121467 -37.13594677 15.05121467 -38 17 C-38.31195313 17.62003906 -38.62390625 18.24007812 -38.9453125 18.87890625 C-41.72962933 26.54162695 -42.16680035 33.98331279 -42.18359375 42.078125 C-42.20872986 44.30469039 -42.23412819 46.53125283 -42.25976562 48.7578125 C-42.28859444 52.23599629 -42.31264283 55.71412934 -42.33129883 59.19238281 C-42.35292143 62.57121186 -42.39232754 65.94948719 -42.43359375 69.328125 C-42.43370956 70.36777405 -42.43382538 71.4074231 -42.4339447 72.47857666 C-42.55860541 81.55899604 -42.55860541 81.55899604 -45.875 85.4375 C-48.94033164 86.97016582 -52.14254272 86.54026471 -55.5 86.5 C-56.20640625 86.49548828 -56.9128125 86.49097656 -57.640625 86.48632812 C-59.38545275 86.47453875 -61.130237 86.45660324 -62.875 86.4375 C-62.96830042 78.18712971 -63.03906552 69.93698538 -63.08224869 61.6862154 C-63.10299027 57.85368833 -63.13105657 54.02152614 -63.17675781 50.18920898 C-63.2207024 46.48034852 -63.24423763 42.77183563 -63.25450897 39.0627346 C-63.26181435 37.65834276 -63.27607578 36.25396667 -63.29792023 34.84972572 C-63.46659015 23.54168689 -62.21614006 13.07397759 -55.875 3.4375 C-41.04278787 -11.42561257 -16.7054882 -12.38257678 0 0 Z " fill="none" transform="translate(223.875,226.5625)"></path> <path d="M0 0 C2.61199495 2.37454087 3.23459495 4.4881157 4.0625 7.875 C5.06667969 7.55273438 6.07085937 7.23046875 7.10546875 6.8984375 C15.63938933 4.47488127 25.63613513 4.60566874 33.71875 8.41796875 C42.94828294 14.15566173 50.03997106 21.70526391 52.63690186 32.36668396 C53.50899044 37.5064474 53.30314363 42.70833904 53.2578125 47.90625 C53.2549826 49.13790894 53.25215271 50.36956787 53.24923706 51.6385498 C53.23809202 55.55080102 53.21299749 59.46281862 53.1875 63.375 C53.17632966 66.03645498 53.16833833 68.69790777 53.16015625 71.359375 C53.1381712 77.86467258 53.10368019 84.36979675 53.0625 90.875 C47.1225 90.875 41.1825 90.875 35.0625 90.875 C35.0531543 89.24554443 35.04380859 87.61608887 35.03417969 85.93725586 C34.99423742 79.87822366 34.9284653 73.81969692 34.85498047 67.76098633 C34.8267957 65.14126083 34.80556884 62.52145068 34.79150391 59.90161133 C34.77004102 56.1305821 34.72336959 52.36056795 34.671875 48.58984375 C34.67064636 47.42291489 34.66941772 46.25598602 34.66815186 45.05369568 C34.54980533 38.44807978 34.03849107 34.22923096 30.0625 28.875 C26.41635984 25.40672033 23.52413303 24.58304538 18.625 24.375 C13.21671955 24.61749084 10.24036023 25.3792394 6.0625 28.875 C1.68602348 35.63536425 1.46177866 42.5094625 1.453125 50.34765625 C1.43658875 51.5113121 1.42005249 52.67496796 1.40301514 53.87388611 C1.35473627 57.56181219 1.3332079 61.24932647 1.3125 64.9375 C1.28432366 67.44989028 1.25439393 69.96226156 1.22265625 72.47460938 C1.14898204 78.608039 1.09928415 84.7412427 1.0625 90.875 C-4.8775 90.875 -10.8175 90.875 -16.9375 90.875 C-16.96008197 79.60069231 -16.97843308 68.32639961 -16.98931217 57.05207443 C-16.99453328 51.81709707 -17.00161696 46.58213597 -17.01293945 41.34716797 C-17.0237957 36.29622487 -17.02978267 31.24529743 -17.03237724 26.19434357 C-17.03422654 24.26621504 -17.03783769 22.33808739 -17.04323006 20.40996552 C-17.05047675 17.71176799 -17.0514894 15.01363536 -17.05102539 12.31542969 C-17.05462067 11.51629654 -17.05821594 10.71716339 -17.06192017 9.89381409 C-17.0553712 6.38018437 -16.88148344 3.25525579 -15.9375 -0.125 C-10.57608863 -1.63251703 -5.24945871 -2.010431 0 0 Z " fill="none" transform="translate(423.9375,222.125)"></path> <path d="M0 0 C0.75152344 -0.02900391 1.50304687 -0.05800781 2.27734375 -0.08789062 C7.5957238 -0.14822129 10.5628425 0.76067709 14.75 4.3125 C17.42027022 7.47744854 19.74322823 10.72903612 21.9296875 14.2421875 C22.81744873 15.66470825 22.81744873 15.66470825 23.72314453 17.1159668 C24.35075684 18.12957275 24.97836914 19.14317871 25.625 20.1875 C26.28483887 21.24815674 26.94467773 22.30881348 27.62451172 23.40161133 C32.66512141 31.52032289 37.6454613 39.6751439 42.60107422 47.84594727 C47.12638589 55.30480732 51.70461385 62.72964404 56.31298828 70.13745117 C57.29935385 71.7249184 58.28110119 73.31526609 59.2578125 74.90869141 C60.31264137 76.60794616 61.39345127 78.29120237 62.4921875 79.96240234 C63.05164063 80.83461426 63.61109375 81.70682617 64.1875 82.60546875 C64.70183594 83.38817139 65.21617187 84.17087402 65.74609375 84.97729492 C66.98050233 87.84867578 66.63164228 89.36662796 65.75 92.3125 C57.42210989 93.63438732 50.64661899 93.66199715 43.5625 88.625 C35.76765278 82.59630553 31.15592552 74.27917177 26.3125 65.875 C24.89399585 63.44126342 23.46913555 61.01128396 22.04296875 58.58203125 C21.68406555 57.96979706 21.32516235 57.35756287 20.9553833 56.72677612 C17.45320731 50.77074756 13.80698177 44.9088998 10.125 39.0625 C8.90356115 37.11593855 7.68220683 35.16932406 6.4609375 33.22265625 C4.54839337 30.17616644 2.63523114 27.1300788 0.71972656 24.08544922 C-1.2806675 20.89669754 -3.26681026 17.69947231 -5.25 14.5 C-5.8682666 13.52063477 -6.4865332 12.54126953 -7.12353516 11.53222656 C-7.68089355 10.62827148 -8.23825195 9.72431641 -8.8125 8.79296875 C-9.30878906 7.99785889 -9.80507813 7.20274902 -10.31640625 6.38354492 C-11.25 4.3125 -11.25 4.3125 -10.25 1.3125 C-7.02434056 -0.30032972 -3.54059192 0.04462931 0 0 Z " fill="none" transform="translate(72.25,223.6875)"></path> <path d="M0 0 C0.69931641 -0.01611328 1.39863281 -0.03222656 2.11914062 -0.04882812 C7.73034731 -0.05407715 11.61545223 1.20706267 15.953125 4.7578125 C21.00469347 10.47406104 24.62087096 16.91838595 28.3984375 23.50390625 C31.30138155 28.55137688 34.35722133 33.4968183 37.4375 38.4375 C42.75614828 46.98086544 47.99950914 55.56724516 53.20874023 64.17773438 C57.19537352 70.74594548 61.31668051 77.20086002 65.61328125 83.5703125 C67.14705276 86.24204351 67.80396699 88.27758664 68.1875 91.3125 C61.62591115 93.49969628 53.45045009 93.30605891 47.12182617 90.37573242 C41.01665488 87.0199302 37.0134888 82.17298975 33.5625 76.25 C32.70081917 74.82273651 31.83882394 73.3956628 30.9765625 71.96875 C30.52571289 71.21335937 30.07486328 70.45796875 29.61035156 69.6796875 C27.62899803 66.38332446 25.59388328 63.12140141 23.56054688 59.85693359 C17.15924449 49.57517865 10.85909792 39.2320868 4.57421875 28.87890625 C2.35992214 25.2332092 0.13369487 21.59531926 -2.10546875 17.96484375 C-2.6164209 17.1349292 -3.12737305 16.30501465 -3.65380859 15.44995117 C-4.60867203 13.90039764 -5.5658923 12.35229304 -6.52587891 10.8059082 C-8.25315641 7.99933033 -9.76643328 5.45070016 -10.8125 2.3125 C-7.12391494 -0.1465567 -4.26767814 -0.01934578 0 0 Z " fill="none" transform="translate(29.8125,223.6875)"></path> <path d="M0 0 C2.87602455 -0.10852923 5.74790832 -0.1875515 8.625 -0.25 C9.43324219 -0.28351563 10.24148437 -0.31703125 11.07421875 -0.3515625 C16.58797738 -0.44121711 19.72871807 0.1953287 24 4 C29.18408006 9.83501207 33.11180923 16.75443427 37.17871094 23.38232422 C38.25505428 25.13322185 39.34202181 26.87721286 40.4296875 28.62109375 C41.11804688 29.73871094 41.80640625 30.85632813 42.515625 32.0078125 C43.13727539 33.01473145 43.75892578 34.02165039 44.39941406 35.05908203 C45.99319817 37.98750232 47.04980754 40.81074602 48 44 C45.36723647 46.63276353 44.10490842 46.29844863 40.4375 46.3125 C32.63316477 46.17213426 25.60572455 44.75324362 20 39 C14.51500133 31.68697009 9.69697674 23.92077409 4.9375 16.125 C4.23689453 15.01125 3.53628906 13.8975 2.81445312 12.75 C2.16283203 11.68007812 1.51121094 10.61015625 0.83984375 9.5078125 C-0.05166382 8.06365967 -0.05166382 8.06365967 -0.96118164 6.59033203 C-2 4 -2 4 -1.17749023 1.65576172 C-0.59463257 0.83615967 -0.59463257 0.83615967 0 0 Z " fill="none" transform="translate(103,223)"></path> <path d="M0 0 C0.75732422 0.00644531 1.51464844 0.01289063 2.29492188 0.01953125 C3.08060547 0.03628906 3.86628906 0.05304688 4.67578125 0.0703125 C5.47306641 0.07933594 6.27035156 0.08835938 7.09179688 0.09765625 C9.05742025 0.12119665 11.022889 0.15706703 12.98828125 0.1953125 C12.98828125 0.5253125 12.98828125 0.8553125 12.98828125 1.1953125 C11.30798828 1.23398438 11.30798828 1.23398438 9.59375 1.2734375 C8.12105479 1.32971885 6.64840005 1.38706618 5.17578125 1.4453125 C4.06879883 1.46658203 4.06879883 1.46658203 2.93945312 1.48828125 C-1.53609293 1.66040297 -1.53609293 1.66040297 -5.0234375 4.2421875 C-5.34957031 4.88671875 -5.67570312 5.53125 -6.01171875 6.1953125 C-6.34171875 4.8753125 -6.67171875 3.5553125 -7.01171875 2.1953125 C-3.96490814 0.16410543 -3.41053551 -0.05128625 0 0 Z " fill="none" transform="translate(68.01171875,223.8046875)"></path> <path d="M0 0 C0.74958984 0.00902344 1.49917969 0.01804688 2.27148438 0.02734375 C4.11862654 0.05087422 5.96560412 0.08674439 7.8125 0.125 C7.8125 0.455 7.8125 0.785 7.8125 1.125 C2.8625 1.455 -2.0875 1.785 -7.1875 2.125 C-7.1875 2.785 -7.1875 3.445 -7.1875 4.125 C-8.1775 4.455 -9.1675 4.785 -10.1875 5.125 C-10.5175 4.135 -10.8475 3.145 -11.1875 2.125 C-7.39586973 -0.40275351 -4.37875969 -0.09943035 0 0 Z " fill="none" transform="translate(30.1875,223.875)"></path> </svg>
            </div>
                </div>
        </>
    )
}

export default Hero