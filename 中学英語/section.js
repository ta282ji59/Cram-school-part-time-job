document.getElementById("div").style.display ="none";//リザルト画面の非表示（最初から表示する必要がないから）

const quiz =[//問題
    [
        '～を読む、読書する','readの過去形、過去分詞形','hold','holdの過去形、過去分詞形','get up','travel','after a while','黄色','～をあける、開く','What\'s up?','滞在する','～を送る、送信する','sendの過去形、過去分詞形','～を忘れる','forgetの過去形、過去分詞形','（～を）理解する、わかる','（～を）勉強する','studyの過去形、過去分詞形','animal','１２月','情報','生徒、学生','教科、科目','borrow','～を与える','giveの過去形','giveの過去分詞形','（～を）食べる','eatの過去形','eatの過去分詞形','later','delicious','both ～ and','母、お母さん','I\'m sure','黒','話す、しゃべる','come from ～','ピアノ','父、お父さん','～と異なる','国','季節','すばらしい時間を過ごす','難しい','～しなければならない（１語で答えること）','走る','runの過去形','runの過去分詞形'
    ],
    [
        'read','read','…を開く、催す','held','起きる','旅をする','しばらくして','yellow','open','どうしたの。','stay','send','sent','forget','forgot','understand','study','studied','動物','December','information','student','subject','…を借りる','give','gave','given','eat','ate','eaten','のちに','とてもおいしい','…も～も両方','mother','～だと確信している','black','talk','～の出身である','piano','father','be different from ～ ','country','season','have a great time','difficult','must','run','ran','run'
    ],
    [
        'stop 〜ing','building','緑','（～を）知っている、わかる','knowの過去形','knowの過去分詞形','～を作る','makeの過去形、過去分詞系','How often','ボランティア','駅','心配する','空腹な、飢えた','茶、紅茶','reason','get to','英語の','待つ','日本語','車','～が必要である','～を訪れる','～を恐れる','uncle','after','look like','husband','afternoon','夕食','way','（なぜなら）～だから','一緒に','背の高い','～を楽しみにして待つ','金','ちがう、ちょうど、異なる','両親','cousin','兄、弟、兄弟','will','sorry','mistake','let\'s','…の前で','cry','time','やさしい、簡単な','plan','sit','yet'
    ],
    [
        '～（するの）をやめる','建物、ビル','green','know','knew','known','make','made','どのくらいの頻度で','volunteer','station','worry','hungry','tea','理由','～に着く、到着する','English','wait','Japanese','car','need','visit','be afraid of ～ ','おじ','～のあと','～のように見える','夫','午後','dinner','方向、方法','because','together','tall','look forward to ～ ','money','different','parents','いとこ','brother','～するつもりである','申し訳なく思って','まちがい','～しよう','in front of …','泣く','時間、期間、ひま','easy','計画・予定','すわる','もう、まだ（…しない）'
    ],
    [
        '～と思う','thinkの過去形、過去分詞形','always','move','台所、キッチン','[時間]を過ごす、～を費やす','spendの過去形、過去分詞形','usually','each','レストラン','早く','雨が降る','…に感動する','strong','start 〜ing','～を捕まえる','catchの過去形、過去分詞形','…のようだ、…のように思われる','on the other hand ','青','有名な','receive','～と言う','sayの過去形、過去分詞形','cook','finish 〜ng','先生、教師','～に加わる・参加する','〜できる','（スポーツ）をする。（楽器）を演奏する','vacation','aunt','daughter','or','音楽','友達','４月','オレンジ色','forever','as a result','peace','compare with','miss','若い','同じこと[もの]','sunny','son','誇りに思う','６月','１０月'
    ],
    [
        'think','thought','いつも、いつでも','（人を）感動させる、動く','kitchen','spend','spent','ふつう','それぞれの、各～','restaurant','early','rain','be impressed with …','強い','〜しはじまる','catch','caught','seem','一方で','blue','famous','～を受け取る','say','said','料理する','～を終える','teacher','join','be able to','play','休暇','おば','娘','～かまたは…','music','friend','April','orange','永久に','結果として','平和','～を比べる','～が恋しい、逃す','young','same','晴れた','息子','be proud of ～ ','June','October'
    ],
    [
        '実現する','beside','kind','discover','library','grandmother','sometimes','against','neighbor','忙しい','問題','get on','want to','morning','１１月','place','look like','～を練習する','ago','hour','お互い','～を使う','今日','over there','hospital','～しなければならない','there is(are)','happen','during','so','hard','疲れた','観光・見物','～を教える','teachの過去形、過去分詞形','these','Be careful','sound','～の世話をする','冬','野球','in addition','view','赤','中学校','rest','come from','数学','trip','hope'
    ],
    [
        'come true','～のそばに','親切な','～を発見する','図書室(館)','祖母','ときどき、ときには','…に反対して','近所の人、隣人','busy','problem','[電車やバス]に乗る','〜したい','朝、午前','November','場所','～のように見える','practice','（今から）～前に','一時間、時間','each other','use','today','あそこに、向こうに','病院','have to ～','～ある・いる','起こる','～の間に','それで、そこで、だから','熱心に','tired','sightseeing','teach','taught','これら','注意しなさい。','～に聞こえる','look after','winter','baseball','そのうえ','ながめ、景色','red','junior high school','休む、横になる','～に由来する','math','旅行','～を望む'
    ],
    [
        '～を建てる','buildの過去形、過去分詞','behind','while','feeling','～を持ってくる','bringの過去形、過去分詞形','秋','姉、妹、姉妹','今、現在（では）','grandfather','earn','become','nothing','these days','テニス','person','if','明日','whole','…をこわがる','drink','夏','日本','９月','carry','サッカー','暑い','遅れた、遅刻した','meaning','…に(～を)話す、教える','tellの過去形','sound like','昨日（は）','～しませんか','right','働く、仕事をする','～をさがす','arrive','explain','express','already','Just a minute.','find out','history','weekend','warm','traditional','コーヒー','理科'
    ],
    [
        'build','built','～の後ろに','しばらくの間','感情','bring','brought','fall','sister','now','祖父','（金）を稼ぐ','～になる','何も～ない','最近は、近ごろでは','tennis','人','もし～ならば','tomorrow','全体の、全～','be afraid of …','～を飲む','summer','Japan','September','～を運ぶ・持っていく','soccer','hot','late','意味','tell','told','…のように思われる','yesterday','Why don\'t you ～?','正しい','work','look for','着く、到着する','…を説明する','…を表現する、表す','すでに、もう','ちょっと待ってください。','（…を）見つけ出す、（…だと）わかる','歴史','週末','あたたかい','伝統的な','coffee','science'
    ],
    [
        '～を持っている、食べる','river','You are A, are\'t you?','picture','白','２月','たくさんの～、多数の～','～を決める','美しい','sea','人気のある','１月','…を経験する','～を探す','Earth','classroom','because of','keep','poor','grow up','pleasure','myself','right now','love','はじめて','しばらくの間','…するつもりである','～についてはどうですか。','taste','～だけでなく…もまた','～を書く','writeの過去形','writeの過去分詞形','My pleasure','bad','begin','a kind of','文化','since','ホテル','wait for','homework','ことば、言語','～を楽しむ','wrong','～の世話をする','今夜（は）','（車を）運転する','Here you are','fun'
    ],
    [
        'have','川','あなたはAですよね。','写真、絵','white','February','a lot of ～','decide','beautiful','海','popular','January','experience','look for ～','地球','教室','…が原因で','～を保つ、維持する','貧しい','成長する','喜び','私自身で、自分で','ただ今','～が大好きである','for the first time','for a while ','be going to …','How about ～ing?','（～な）味がする','not only ～ but also …','write','wrote','writen','どういたしまして','悪い','はじまる','～の種類','culture','…（して）以来','hotel','～を待つ','宿題','language','enjoy  〜ing','調子が悪い','take care of ～ ','tonight','drive','はい、どうぞ','楽しいこと'
    ],
    [
        'should','…に賛成する','３月','怒った','朝食','～を誇りに思う','いつ、〜のとき','昼食','悲しい','７月','例えば','お気に入りの','though','belong to','depend on','go to','～に興味がある','show','umbrella','ask','find','listen to','between','寒い','重要な・大切な','ギター','evening','学ぶ・習う','street','come','～ years old','grandparents','then','notice','cloudy','I\'d love to','follow','at that time','minute','～を推測する','as … as','holiday','before','５月','目的','毎日','from','I see','ちがい','introduce'
    ],
    [
        '～すべきである','agree with','March','angry','breakfast','be proud of','when','lunch','sad','July','for example','favorite','…だけれども','～に属している','…に頼る','～に行く','be interested in','～を見せる','かさ','たのむ','～を見つける','～を聞く','～の間に','cold','important','guitar','晩・夕方','learn','通り','来る','～歳、創立～年','祖父母','そのとき、それから','気がつく','曇った','ええ、ぜひとも','～に従う、～を守る','その時、その当時','[時間の]分','guess','～と同じくらい…','休日','～（より）前に','May','purpose','every day','～から（の）、～出身の','なるほど。わかった。difference','～を紹介する'
    ],
    [
        '８月','let\'s','people','～を聞く、～が聞こえる','hearの過去形、過去分詞形','give up','especially','useful','grow','意見','～に興味がある','wife','once','interesting','encourage … to','How old','ユニフォーム','泳ぐ','（ことば）を話す','…まで','ジュース','（～を）歌う','（～を）出発する、出る、去る','lose','…を思い出す、覚えている','…を解決する','never','clean','I\'m glad','～の世話をする','雪','with a smile','invite','…を楽しみに待つ','clerk','help','mean','for','誕生日','meal','買う','buyの過去形、過去分詞形','春','children','How about you?','bird','売る','sellの過去形、過去分詞系','夢','〜するつもりである','May I help you?','May I speak to A, please?','Please help yourself'
    ],
    [
        'August','～しよう','人々','hear','heard','やめる、断念する','特に','役に立つ','成長する','opinion','be interested in ～ ','妻','以前、一度','おもしろい、興味を起こさせる','…に～するように促す','どのくらいの年の、いくつの','uniform','swim','speak','until','juice','sing','leave','～を保てなくなる、負ける','remember','solve','けっして～ない','～をそうじする','うれしい','take care of ～','snow','満面の笑みで','…を招く、招待する','look forward to …','店員','助け、救助','～を意味する','～として、〜のために、〜の間','birthday','食事','buy','bought','spring','子供たち[child の複数形]','あなたはどうですか？','鳥','sell','sold','dream','would like to','いらっしゃいませ','Aに代わっていただけませんか','ご自由にお召し上がりください'
    ],
    // [

    // ],
    // [

    // ]

]
console.log(quiz[quiz.length-1])

const para = decodeURIComponent(location.search.split("?")[1]);//URLの?意向を抽出
let question=[],correct=[]

let randoms=[],first=0
function question_set(){//問題の作成
    if(para==0){first=0}
    else if(para==1){first=2}
    else if(para==2){first=4}
    else if(para==3){first=6}
    else if(para==4){first=8}
    else if(para==5){first=10}
    else if(para==6){first=12}
    else if(para==7){first=14}
    else if(para==8){first=0}
    else if(para==9){first=4}
    else if(para==10){first=8}
    else if(para==11){first=12}
    
    
    if(para>=8){//配列の合成
        let conbine_quiz= quiz[first].concat(quiz[first+2]);
        let conbine_quiz2=quiz[first+1].concat(quiz[first+3]);
        let j=0
        for(let i=0;i<conbine_quiz.length;i++){
            question[i]=conbine_quiz[i]
            correct[i]=conbine_quiz2[i]
            j++
        }
    }
    
    else {
        j=0
        for(let i=0;i<quiz[first].length;i++){
            question[i]=quiz[first][i]
            correct[i]=quiz[first+1][i]
            j++
        }
    }
}

question_set()

let tmp
for(i=0; i<question.length; i++){
    while(true){
        tmp = intRandom(0,question.length-1);
        if(!randoms.includes(tmp)){
            randoms.push(tmp);
            break;
        }
    }
}
function intRandom(min, max){
    return Math.floor( Math.random() * (max - min + 1)) + min;
}
console.log(randoms)
// for(i=0;i<question.length;i++){
//     console.log(question[randoms[i]],i)    
// }



//問題の英単語再生
const voice = document.getElementById("voice")
function EnglishVoice(){
    voice.addEventListener("click", () => {
        const u = new SpeechSynthesisUtterance(question[randoms[quiz_count]]);
        u.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Fred'; })[0];
        u.lang = "en-US";
        u.name = 'Fred';
        window.speechSynthesis.speak(u);
    });
}
EnglishVoice()
//🚨一時的にコメントにしただけだから修正すること
// if(question[i].charCodeAt(0) >= 256 || question[i].charCodeAt(1) >= 256||question[i].charCodeAt(question[i].length-1) >= 256||question[i].charCodeAt(question[i].length) >= 256){//問題の一部に日本語があったらの処理
//     voice.remove()        
// }
// else{
//     EnglishVoice()  
// }




function quizSet(quiz_count){//クイズの問題表示
    const $question = document.getElementById('question')
    $question.textContent = "第" + (quiz_count+1) + "問　『" + question[randoms[quiz_count]] + "』"
    if(quiz_count==0)    document.getElementById('message').textContent='端末によっては音源が聴こえないそうです'
    document.getElementById('message').textContent=''
    document.getElementById('message2').textContent='※問題が英語の時のみご利用ください（問題に１文字でも日本語があるとエラーが起きます）'
}

let quiz_count=0;//今何問目かを示す変数
quizSet(quiz_count)//１問目のみこれで実行

function goto_result(quiz_count){
    if(quiz_count==question.length) result();
}

const $button = document.getElementsByTagName('button')
let wrong_problem=[]//間違えた問題を補完する配列
let wrong_answer=[]//間違えた問題の答えを補完する配列
let wrong_count=0//間違えた数を記録
for(let i=0;i<$button.length;i++){
    document.getElementsByTagName('button')[i].addEventListener('click',(e)=>{//ボタンを押した際のイベント
        if('分かった' === e.target.textContent){
            let answer_check = window.confirm('正解は『'+ correct[randoms[quiz_count]]+'』です。\n正解の場合は「OK」、\n不正解の場合は「キャンセル」を押してください')
            if(answer_check==false){
                wrong_problem[wrong_count]=question[randoms[quiz_count]]//間違えた問題を挿入
                wrong_answer[wrong_count]=correct[randoms[quiz_count]]
                quiz_count++
                wrong_count++
            }
            else{quiz_count++}
            goto_result(quiz_count)
        }
        else if('分からない' === e.target.textContent){
            window.alert('正解は『'+ correct[randoms[quiz_count]]+'』です。')
            wrong_problem[wrong_count]=question[randoms[quiz_count]]//間違えた問題を挿入
            wrong_answer[wrong_count]=correct[randoms[quiz_count]]
            quiz_count++
            wrong_count++
            goto_result(quiz_count)
        }
        else if('やめる' === e.target.textContent){
            result()//結果画面へ
            
        }
        quizSet(quiz_count)//二問目以降はこれで実行
    })
}



function result(){//結果画面の表示
    document.getElementById("question").style.display ="none";//リザルト画面の非表示（最初から表示する必要がないから）
    document.getElementById('start').remove()//リザルト画面に不要な問題画面、ボタンを消去する
    const $div = document.getElementById('div')
    $div.style.display ="block";//リザルトを表示すつクラスを呼び出す
    let $p =[]
    let newContent=[]
    if(wrong_problem!=0){
        $div.textContent="~間違えた単語一覧~"
        for(let i=0;i<wrong_problem.length;i++){
            $p[i] = document.createElement('p')
            $p[i].style.backgroundColor="rgb(9, 255, 255)";
            $p[i].style.fontSize="28px"
            newContent[i] = document.createTextNode('・'+wrong_problem[i]+' ('+wrong_answer[i]+')');
            $p[i].appendChild(newContent[i])
            $div.appendChild($p[i])
        }
    }
    else{
        if(quiz_count==0) $div.textContent='結果なし'
        else $div.textContent="全問正解"
    }
    localStorage.setItem('w_p_h'+para, JSON.stringify(wrong_problem));
    localStorage.setItem('w_a_h'+para, JSON.stringify(wrong_answer));
    quiz[16] = JSON.parse(localStorage.getItem('w_p_h'))
    quiz[17] = JSON.parse(localStorage.getItem('w_a_h'))
    console.log("ここから間違いデータを表示する")
    console.log(quiz[16])
}

