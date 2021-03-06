/*
 * @Author: Michael Zhang
 * @Date: 2019-07-04 11:43:28
 * @LastEditTime: 2019-07-18 16:09:16
 */
// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

let GameStateMgr = require('./common/manager/gameStateManager')
let UIManager = require('./common/manager/uiManager')
let AudioMgr = require('./common/manager/audioManager')
let LoginView = require('./views/LoginView')

cc.Class({
    extends: cc.Component,

    properties: {

        node1: {
            default: null,
            type: cc.Node,
        }
        
    },
    
    // LIFE-CYCLE CALLBACKS:,

    onLoad () {

        // cc.log(  this.node1.getBoundingBox() )

        // cc.log( this.node1.getContentSize(), this.node1.width, this.node1.height )
    },

    start () {

        // AudioMgr.getInstance().playSound("fish_vocie13.mp3", false, 0.4, ()=>{

        //     UIManager.getInstance().openUI( LoginView, 10, ()=>{

        //         GameStateMgr.getInstance().initGame();
    
        //     } , (completedCount, totalCount, item)=>{ }) 
            
        // })
    
    },

    
});
