This file is examples for using git bash

To create a new repository
$ git init
$ git add README.md
$ git commit -m "first commit"
$ git branch -M main
$ git remote add origin https://github.com/jjy0514/app.git
$ git push -u origin main

Push an existing repository
$ git remote add origin https://github.com/jjy0514/app.git
$ git branch -M main
$ git push -u origin main

Command List
1. git init

When creating a repository, use “git init” command. “--bare” option allows creating a bare repository for remote commits without any source code added. 

$ git init --help
$ git init
$ git init --bare

When created with “--bare” option, one must first clone the repository, add files, and commit.
Conventionally, a repository has a extension “.git” at the end of the directory

$ mkdir myproject.git
$ cd myproject.git
$ git init --bare

This will create a directory “myproject.git”, and when a remote user clones this repository, there will be a directory “myproject” (that is without the .git suffix) is created.

2. git clone

This is a command used to copy a whole repository from a remote repository for the first time.

$ git clone ssh://user_name@100.100.100.60/opt/repo/some_name_to_project
$ git clone https://github.com/zephyrproject-rtos/zephyr.git

When using ssh protocol, git may ask for password for the user “user_name”.
A repository with https support may allow any users to clone it (e.g. github)

3. git checkout
This command is used for checking out a branch or for restoring files.
$ git checkout main.c ---> restore main.c to the original state
$ git checkout *.c  ----> restore all files to original state
$ git checkout -b mybranch 5aeafa1  ---> checkout a branch name “mybranch” from 5aeafa1

4. git status
This command shows various status of the repository including added, deleted, modified, ignored files.

$ git status

5. git pull
This command is used to incorporate changes from a remote repository to the current branch


$ git pull origin master
6. git push
This command is used to update remote references. This is equivalent to SVN commit


$ git push origin master

7. git add
This command is used to add changed files to the index.


$ git add main.c
$ git add -f libtest.a : force to add file which is not allowed to be added normally by .gitignore

8. git rm
This command removes files from the index and also deletes the files from the local storage. If a file is deleted manually, one must use this command to delete it from the index.

$ git rm main.c
$ git rm -f test_dir : removes directory and it’s contents

9. git mv
This command moves indexed files to a different location. It is the same as moving a file manually, “git rm”, then “git add”.

$ git mv main.c ./src/main.c : moves main.c to the src/main.c

10. git commit
This command is used to stage changed files such as removed, added, moved, etc.

$ git add main.c
$ git commit -m “example updated to support new feature”

11. git clean
This command deletes all unstaged files from the local storage. It is convenient to remove all untracked files at once.

$ git clean -xfdn : shows which files are to be cleaned, but does not delete any files
$ git clean -xfd : cleans all untracked files permanently

12. git log
This command shows the history of the repository.

$ git log : shows the commit log
$ git log --name-only : shows changed files
$ git log main.c : shows the commit which contains the specific file

13. git show
This command shows the commit details.

$ git show : shows the last commit 
$ git show dba097972d28701c10b9af2a48af7d924c9cfca3 : shows commit for the specific hash

14. git diff
This command shows the difference between currently changed files and the ones in the remote repository. It also displays differences between commits.

$ git diff : shows all the differences
$ git diff main.c : shows the differences only for the specific file
$ git diff a3d81b..de3512  : shows the difference between commit a3d81b… to de3512...
$ git diff a3d81b..de3512 main.c : shows the difference of main.c between the given commits

15. git branch 
This command manages (show, create, delete) branches.

16. git rebase
This command reapplies commits.

17. git tag
This command manages tags

$ git tag -a v1.0.0 -m “this is release for version 1.0.0”

18. git archive
This command is used to create an archive from the tree.

$ git archive --format zip --output release/${SRC}.zip --prefix=${SRC}/ master

git commit example
commit f4fe7b90df01b8ca2294af771ce43b1828a70de5
Author: Krzysztof Kopyściński <krzysztof.kopyscinski@codecoup.pl>
Date:   Mon Sep 7 10:21:58 2020 +0200

    Bluetooth: Mesh: Heartbeat period starts at tx
    Starts the periodic heartbeat publish period at the end of the
    publication, instead of at the ordering time. This ensures that the
    heartbeat period doesn't get shortened by other enqueued messages.

How to push project
$ git add <project folder name>
$ git commit
$ git push master origin

To reset repository

$ git reset --hard
