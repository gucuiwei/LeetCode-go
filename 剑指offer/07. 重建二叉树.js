/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 function buildTree(pre, vin)
 {
     var result =null;
     if(pre.length>1){
         var root = pre[0];
         var vinRootIndex = vin.indexOf(root);
         var vinLeft = vin.slice(0,vinRootIndex);
         var vinRight = vin.slice(vinRootIndex+1,vin.length);
         pre.shift();
         var preLeft = pre.slice(0,vinLeft.length);
         var preRight = pre.slice(vinLeft.length,pre.length);
         result={
             val:root,
             left:buildTree(preLeft,vinLeft),
             right:buildTree(preRight,vinRight)
         }
 
     }else if(pre.length ===1){
         result= {
             val :pre[0],
             left:null,
             right:null
         }
     }
     return result;
 
 }