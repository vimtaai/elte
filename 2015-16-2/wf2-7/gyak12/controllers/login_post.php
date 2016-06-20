<?php if (!defined('TOKEN')) die ('Ejnyebejnye!');

function validate($input, &$data, &$errors) {
    // Eredmény nullázása
    $data = [];
    $errors = [];
    
    if (is_empty($input, 'email')) {
        $errors[] = 'Nem adtál email címet!';
    } elseif (!preg_match('#[a-zA-Z0-9_\.]+\@[a-zA-Z0-9_\.]+\.[a-z]{2,}#', $input['email'])) {
        $errors[] = 'Az email cím formátuma nem megfelelő!';
    } else {
        $data['email'] = $input['email'];
    }
    
    if (is_empty($input, 'password')) {
        $errors[] = 'Nem adtál jelszót!';
    } else {
        $data['password'] = $input['password'];
    }
    
    return !(bool)$errors;
}

$data = [];
$errors = [];
$input = $_POST;

function search(array $array, callable $T) {
    foreach ($array as $elem) {
        if ($T($elem)) {
            return $elem;
        }
    }
    return NULL;
}

if (validate($input, $data, $errors)) {
    $file = __DIR__ . '/../data/users.json';
    $users = file_load($file);
    
    if (($user = search($users, function ($elem) use ($data) {
        return $elem['email'] == $data['email'];
    })) !== NULL) {
        if (password_verify($data['password'], $user['password'])) {
            $_SESSION['logged_in'] = $user;
            redirect('main');
        }
        
    }  
    $errors[] = 'Hibás felhasználónév/jelszó!';
    flash_set('errors', $errors);
    redirect('login');
} else {
   
    flash_set('errors', $errors);
    flash_set('input', $input);
    redirect('login');
}