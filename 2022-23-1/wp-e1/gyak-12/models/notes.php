<?php
require_once("helpers/utils.php");

const NOTE_DATA_FILE = "data/notes.json";
$GLOBALS["notes"] = load_from_file(NOTE_DATA_FILE);

function add_note($note) {
  $GLOBALS["notes"][] = $note;
  save_to_file(NOTE_DATA_FILE, $GLOBALS["notes"]);
}

function edit_note($id, $new_note) {
  $note_to_edit_index = find_note_index_by_id($id);
  $GLOBALS["notes"][$note_to_edit_index] = $new_note;
  save_to_file(NOTE_DATA_FILE, $GLOBALS["notes"]);
}

function delete_note($id) {
  $note_to_delete_index = find_note_index_by_id($id);
  array_splice($GLOBALS["notes"], $note_to_delete_index, 1);
  save_to_file(NOTE_DATA_FILE, $GLOBALS["notes"]);
}

function find_note_index_by_id($id) {
  foreach ($GLOBALS["notes"] as $index => $note) {
    if ($note["id"] === $id) {
      return $index;
    }
  }

  return NAN;
}

function is_note_selected($note, $selected_note) {
  if ($selected_note === null) {
    return false;
  }

  return $note["id"] === $selected_note["id"];
}

function get_notes_for_user($user) {
  $notes_for_user = [];

  foreach ($GLOBALS["notes"] as $note) {
    if ($note["owner"] !== $user["username"]) {
      continue;
    }

    $notes_for_user[] = $note;
  }

  return $notes_for_user;
}