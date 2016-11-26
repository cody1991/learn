try {
    iDontExist();
} catch (e) {
    console.log(e.name + ': ' + e.message);
} finally {
    console.log('Finally!');
}
