/**
 * Created by muzrea on 17-7-11.
 */
var score = [["Alex","90","92","93","95"],["Mary","89","85","95","92"],["Gergeo","81","83","90","94"]];
function tranArr(score){
    for(var a=0;a<score.length;a++){
        for(var b=1;b<5;b++){
            score[a][b] = Number(score[a][b]);
        }
    }
    return score;
}
function tranOArr(ave){
    for(var a=0;a<ave.length;a++){
        ave[a] = Number(ave[a]);

    }
    return ave;
}
tranArr(score);


function creaPerTScore(score){
    var perTScore1 = new Array();
    for(var i=0;i<score.length;i++){
        perTScore1[i] = score[i][1]+score[i][2]+score[i][3]+score[i][4];
    }
    return perTScore1;
}
var perTScore = creaPerTScore(score);
var perTScore2 = creaPerTScore(score);
creaPerTScore(score);//求出每个人的总分
var perAveScore = new Array();
function creaPerAveScore(score){
    for(var j=0;j<score.length;j++){
        perAveScore[j] = (score[j][1]+score[j][2]+score[j][3]+score[j][4])/4;
    }
    return perAveScore;
}
creaPerAveScore(score);
tranOArr(perAveScore);//求出每个人的平均分
var tScore = 0;
function creaTScore(perTScore){
    for(var m=0;m<perTScore.length;m++){
        tScore += perTScore[m] ;
    }
    return tScore;
}
creaTScore(perTScore);//求出全班的总分
var sAve = 0;
function creasAve(perTScore){
    sAve = tScore/perTScore.length;
    return sAve;
}
creasAve(perTScore);//求出总平均分
var ptScore  = perTScore2;
ptScore.sort();//对每一个人的总分排序
var medianTScore = 0;
function calMedian(ptScore) {
    var n = ptScore.length%2;
    var t = 0;
    if(n = 0){
        t=ptScore.length/2;
    }
    else{
        t=(ptScore.length+1)/2;
    }
    medianTScore = ptScore[t]
}
calMedian(ptScore);//求出全班总分中位数
console.log("成绩单");
console.log("姓名/数学/语文/英语/编程/平均分/总分");
console.log(" = = = = = = = = = = = = = = = = = = = = = ");
for(var c=0;c<score.length;c++){
    console.log(score[c][0]+'\t'+score[c][1]+'\t'+score[c][2]+'\t'+score[c][3]+'\t'+score[c][4]+'\t'+perAveScore[c]+'\t'+perTScore[c]);
}
console.log(" = = = = = = = = = = = = = = = = = = = = = ");
console.log("全班总平均分 "+sAve);
console.log("全班总分中位数 "+medianTScore);