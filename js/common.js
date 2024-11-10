// JavaScript Document
'use strict';

{

　　/* スクロールで表示 */
    //スクロールで表示させるclassを取得
    const scrollTarget = document.getElementsByClassName('scroll-on');
    const scrollTargets = Array.from(scrollTarget);
    
    //スクロールでコンテンツ高さの30％の領域に入ったら表示させる
    const options = {
        threshold: 0.3,
    };

    function callback(entries , obs){
        entries.forEach(entry => {
            if (!entry.isIntersecting){
                return;       
            }
        
            entry.target.classList.add('appear');
            obs.unobserve(entry.target);
        });
        
    }
    
    const observer = new IntersectionObserver(callback , options);
    
    scrollTargets.forEach(target => {
        observer.observe(target);
    });
    
　　/* スクロールで表示　END */
    
}