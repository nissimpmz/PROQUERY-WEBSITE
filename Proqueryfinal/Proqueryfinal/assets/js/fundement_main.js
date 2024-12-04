// Dropdown 1 completed
document.getElementById('intro-link').addEventListener('click', function() {
   toggleContent('intro-content');
});
document.getElementById('syntax-link').addEventListener('click', function() {
   toggleContent('syntax-content');
});
document.getElementById('createTable-link').addEventListener('click', function() {
   toggleContent('createDB-content');
});
document.getElementById('createDB-link').addEventListener('click', function() {
   toggleContent('createTable-content');
});
document.getElementById('altertb-link').addEventListener('click', function() {
   toggleContent('altertb-content');
});
document.getElementById('DROPTB-link').addEventListener('click', function() {
   toggleContent('DROPTB-content');
});
document.getElementById('select-link').addEventListener('click', function() {
   toggleContent('select-content');
});
document.getElementById('insert-link').addEventListener('click', function() {
   toggleContent('insert-content');
});
document.getElementById('delete-link').addEventListener('click', function() {
   toggleContent('delete-content');
});
document.getElementById('where-link').addEventListener('click', function() {
   toggleContent('where-content');
});
document.getElementById('agg-link').addEventListener('click', function() {
   toggleContent('agg-content');
});

// Dropdown 2 completed
document.getElementById('innerjoin-link').addEventListener('click', function() {
   toggleContent('innerjoin-content');
});
document.getElementById('leftjoin-link').addEventListener('click', function() {
   toggleContent('left-join-content');
});
document.getElementById('rightjoin-link').addEventListener('click', function() {
   toggleContent('rightjoin-content');
});
document.getElementById('orderby-link').addEventListener('click', function() {
   toggleContent('orderby-content');
});
document.getElementById('group-by-link').addEventListener('click', function() {
   toggleContent('group-content');
});
document.getElementById('having-link').addEventListener('click', function() {
   toggleContent('having-content');
});
document.getElementById('sub-query-link').addEventListener('click', function() {
   toggleContent('subqueries-content');
});

document.getElementById('about-us-link').addEventListener('click', function() {
   toggleContent('about-us-content');
});

document.getElementById('homepage-link').addEventListener('click', function() {
   toggleContent('homepage-content');
});


//2NDCALL FOR HOMEPAGE
document.getElementById('INNER-link').addEventListener('click', function() {
   toggleContent('INNER-content');
});
document.getElementById('TB-link').addEventListener('click', function() {
   toggleContent('TB-content');
});
document.getElementById('CD-link').addEventListener('click', function() {
   toggleContent('CD -content');
});
document.getElementById('AT-link').addEventListener('click', function() {
   toggleContent('AT-content');
});
document.getElementById('TD-link').addEventListener('click', function() {
   toggleContent('TD-content');
});
document.getElementById('US-link').addEventListener('click', function() {
   toggleContent('US-content');
});
document.getElementById('DV-link').addEventListener('click', function() {
   toggleContent('DV-content');
});
document.getElementById('DD-link').addEventListener('click', function() {
   toggleContent('DD-content');
});
document.getElementById('WC-link').addEventListener('click', function() {
   toggleContent('WC-content');
});
document.getElementById('AF-link').addEventListener('click', function() {
   toggleContent('AF-content');
});










// Function to toggle content visibility
function toggleContent(contentId) {
   const allContent = document.querySelectorAll('[id$="-content"]');
   allContent.forEach(content => {
      content.style.display = 'none';
   });
   document.getElementById(contentId).style.display = 'block';
}

// Show "Intro" content on page load
window.onload = function() {
   toggleContent('homepage-content');
};








