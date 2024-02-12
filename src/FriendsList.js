import Friend from "./Friend";


function FriendsList({ friends, onSelect, selectedFriend }) {
  const friendsList = friends.map((friend) => (
    <Friend friend={friend} key={friend.id} onSelect={onSelect} selectedFriend={selectedFriend} />
  ));

  return <ul>{friendsList}</ul>;
}



export default FriendsList;
