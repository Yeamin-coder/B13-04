// 1. Select the necessary elements
const jobContainer = document.querySelector('section.space-y-5');
const totalCountEl = document.getElementById('dash-total-count');
const interviewCountEl = document.getElementById('dash-interview-count');
const rejectedCountEl = document.getElementById('dash-rejected-count');
const availableJobsSpan = document.querySelector('.flex.justify-between span');


function updateCounters() {
    const allJobs = document.querySelectorAll('section.space-y-5 > .bg-base-100');
    const interviewJobs = document.querySelectorAll('.status-interview');
    const rejectedJobs = document.querySelectorAll('.status-rejected');

    totalCountEl.innerText = allJobs.length;
    interviewCountEl.innerText = interviewJobs.length;
    rejectedCountEl.innerText = rejectedJobs.length;

    
    availableJobsSpan.innerText = `${allJobs.length} jobs`;

    
    const emptyState = document.querySelector('section.hidden'); 
    if (allJobs.length === 0) {
        emptyState.classList.remove('hidden');
    }
}


jobContainer.addEventListener('click', function(e) {
   
    const card = e.target.closest('.bg-base-100');
    if (!card) return;

    const statusBadge = card.querySelector('.w-30'); 

    
    if (e.target.closest('.btn-circle')) {
        card.remove();
        updateCounters();
    }

    
    if (e.target.innerText === 'INTERVIEW') {
       
        card.classList.add('status-interview');
        card.classList.remove('status-rejected');
        
        statusBadge.innerText = 'Interview';
        statusBadge.className = 'w-30 text-white bg-green-500 p-2 rounded-[5px] mb-2';
        updateCounters();
    }


    if (e.target.innerText === 'REJECTED') {
     
        card.classList.add('status-rejected');
        card.classList.remove('status-interview');
        
        statusBadge.innerText = 'Rejected';
        statusBadge.className = 'w-30 text-white bg-red-500 p-2 rounded-[5px] mb-2';
        updateCounters();
    }
});


updateCounters();