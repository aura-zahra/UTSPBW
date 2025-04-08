
function showAllAchievements(event) {
    event.preventDefault();
    document.getElementById('achievements').classList.add('d-none');
    document.getElementById('achievementsPage').classList.remove('d-none');
}

function hideAchievements() {
    document.getElementById('achievementsPage').classList.add('d-none');
    document.getElementById('achievements').classList.remove('d-none');
}
