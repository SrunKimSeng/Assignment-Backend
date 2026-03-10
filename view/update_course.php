<?php
include('view/header.php');
?>

<section class="course-container">
    <h2>Update Course</h2>

    <form action="." method="post">
        <input type="hidden" name="action" value="update_course">
        <input type="hidden" name="course_id" value="<?= htmlspecialchars($course['courseID']) ?>">

        <label>Course Name:</label>
        <input type="text" name="course_name" maxlength="30"
               value="<?= htmlspecialchars($course['courseName']) ?>" required>

        <input type="submit" value="Update Course">
        <a href=".?action=list_courses">Cancel</a>
    </form>
</section>

<?php
include('view/footer.php');
?>