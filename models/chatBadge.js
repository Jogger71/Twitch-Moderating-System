function ChatBadge(badgeName) {
  this.badgeName = this.setBadgeName(badgeName);
}

ChatBadge.prototype.setBadgeName = function(badgeName) {
  this.badgeName = badgeName;
};

ChatBadge.prototype.getBadgeName = function() {
  return this.badgeName;
};

ChatBadge.prototype.getBadge = function() {
  let badge = $(document.createElement("span"));
};