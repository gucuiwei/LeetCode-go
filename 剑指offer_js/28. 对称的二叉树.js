// 判断二叉树是否是对称二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// 采用迭代实现
const isSymmetric = function(root) {
    return isSymmetrical(root,root);
};
function isSymmetrical(proot1,proot2){

    if(proot1 == null && proot2 == null){
        return true;
    }
    if(proot1 == null || proot2 == null){
        return false;
    }
    if(proot1.val!=proot2.val)
    {
        return false;
    }
    return isSymmetrical(proot1.left,proot2.right) && isSymmetrical(proot1.right,proot2.left) ;
}