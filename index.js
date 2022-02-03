'use strict'

const empty = () => {
    let user = document.getElementById('input').value

    if(!user) {
        alert("名前を入力してくださいよ〜😭\nお願いします〜")
    } else {
        alert(`${user}さん　ようこそ😎！\n何も出ないですけど...😝`)
    }
}

const refresh = () => {
    setTimeout(() => {
        location.reload()
    })
}