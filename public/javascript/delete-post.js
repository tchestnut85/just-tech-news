async function deleteFormHandler(event) {
    event.preventDefault();

    await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        document.location.replace('/dashboard/');
    }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);