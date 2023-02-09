var deleteDuplicates = function(head) {

    if(!head) return null

    let dummy = new ListNode(-Infinity,head)
    let prev = dummy;
    let curr = head;

    while(curr){
        if(prev.val === curr.val){
            while(curr && prev.val === curr.val){
                curr = curr.next;
            }
            prev.next = curr;
        }else{
            prev = curr;
            curr = curr.next;
        }
    }
    return dummy.next;
};